"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, Trophy, Target, ArrowLeft, Upload, X } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

interface StressReleaseSanctuaryProps {
  onBack: () => void;
}

interface GameStats {
  score: number;
  combo: number;
  maxCombo: number;
  totalPunches: number;
}

export function StressReleaseSanctuary({ onBack }: StressReleaseSanctuaryProps) {
  const [isSwinging, setIsSwinging] = useState(false);
  const [gameStats, setGameStats] = useState<GameStats>({
    score: 0,
    combo: 0,
    maxCombo: 0,
    totalPunches: 0,
  });
  const [showPunchEffect, setShowPunchEffect] = useState(false);
  const [punchPosition, setPunchPosition] = useState({ x: 0, y: 0 });
  const [comboTimer, setComboTimer] = useState<number | null>(null);
  const [bagMovement, setBagMovement] = useState({ x: 0, y: 0, rotation: 0 });
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const bagRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePunch = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isSwinging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Calculate punch force and direction based on where the bag was hit
    const bagCenterX = rect.width / 2;
    const bagCenterY = rect.height / 2;
    
    // Calculate impact direction and force
    const impactX = (x - bagCenterX) / bagCenterX; // -1 to 1
    const impactY = (y - bagCenterY) / bagCenterY; // -1 to 1
    
    // Generate realistic movement based on impact with much larger values
    const forceMultiplier = 1.5 + Math.random() * 0.5; // 1.5 to 2.0
    const swingX = impactX * 80 * forceMultiplier + (Math.random() - 0.5) * 20; // Much larger swing
    const swingY = Math.abs(impactY) * 30 * forceMultiplier + (Math.random() - 0.5) * 15;
    const rotation = impactX * 35 * forceMultiplier + (Math.random() - 0.5) * 20;

    setPunchPosition({ x, y });
    setShowPunchEffect(true);
    setIsSwinging(true);

    // Create swing animation sequence
    const swingSequence = [
      { x: swingX, y: swingY, rotation: rotation }, // Initial impact
      { x: swingX * 0.7, y: swingY * 0.5, rotation: rotation * 0.7 }, // Swing back
      { x: swingX * -0.4, y: swingY * 0.3, rotation: rotation * -0.4 }, // Counter swing
      { x: swingX * 0.2, y: swingY * 0.2, rotation: rotation * 0.2 }, // Small swing
      { x: swingX * -0.1, y: swingY * 0.1, rotation: rotation * -0.1 }, // Settle
      { x: 0, y: 0, rotation: 0 } // Rest
    ];

    // Animate through the sequence
    let sequenceIndex = 0;
    const animateSequence = () => {
      if (sequenceIndex < swingSequence.length) {
        setBagMovement(swingSequence[sequenceIndex]);
        sequenceIndex++;
        setTimeout(animateSequence, 400); // 400ms between each phase
      } else {
        setIsSwinging(false);
      }
    };

    animateSequence();

    // Clear existing combo timer
    if (comboTimer) {
      clearTimeout(comboTimer);
    }

    // Update game stats
    setGameStats(prev => {
      const newCombo = prev.combo + 1;
      const comboMultiplier = Math.floor(newCombo / 5) + 1;
      const baseScore = 10;
      const scoreGain = baseScore * comboMultiplier;

      return {
        score: prev.score + scoreGain,
        combo: newCombo,
        maxCombo: Math.max(prev.maxCombo, newCombo),
        totalPunches: prev.totalPunches + 1,
      };
    });

    // Set new combo timer
    const newTimer = setTimeout(() => {
      setGameStats(prev => ({ ...prev, combo: 0 }));
    }, 2000);
    setComboTimer(newTimer);

    // Hide punch effect
    setTimeout(() => {
      setShowPunchEffect(false);
    }, 300);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const resetGame = () => {
    setGameStats({
      score: 0,
      combo: 0,
      maxCombo: 0,
      totalPunches: 0,
    });
    setIsSwinging(false);
    setShowPunchEffect(false);
    setBagMovement({ x: 0, y: 0, rotation: 0 });
    if (comboTimer) {
      clearTimeout(comboTimer);
    }
  };

  useEffect(() => {
    return () => {
      if (comboTimer) {
        clearTimeout(comboTimer);
      }
    };
  }, [comboTimer]);

  return (
    <div className="min-h-screen bg-[#FFFBF5] p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <Button onClick={onBack} variant="outline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Lagom Lab
        </Button>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">🥊 Stress Release Sanctuary</h1>
        <p className="text-muted-foreground">Release your stress with this interactive punching bag game!</p>
      </div>

      <div className="w-full max-w-4xl mx-auto space-y-6">
        {/* Image Upload Section */}
        <Card className="p-6 bg-background border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Upload an image to overlay on the punching bag for personalized stress relief
              </div>
              {uploadedImage && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded border overflow-hidden">
                    <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover" />
                  </div>
                  <Button
                    onClick={removeImage}
                    variant="outline"
                    size="sm"
                    className="h-8 w-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                {uploadedImage ? 'Change Image' : 'Upload Image'}
              </Button>
            </div>
          </div>
        </Card>

        {/* Game Stats */}
        <Card className="p-6 bg-background border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{gameStats.score}</div>
              <div className="text-sm text-muted-foreground">Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">{gameStats.combo}</div>
              <div className="text-sm text-muted-foreground">Combo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">{gameStats.maxCombo}</div>
              <div className="text-sm text-muted-foreground">Max Combo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">{gameStats.totalPunches}</div>
              <div className="text-sm text-muted-foreground">Total Punches</div>
            </div>
          </div>
        </Card>

        {/* Game Area */}
        <div className="relative h-96 bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>

          {/* Ceiling mount */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-700 rounded-b-lg"></div>

          {/* Chain - Fixed alignment */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gray-600 opacity-80"></div>

          {/* Punching Bag */}
          <motion.div
            ref={bagRef}
            className="absolute top-20 left-1/2 transform -translate-x-1/2 cursor-pointer select-none"
            onClick={handlePunch}
            animate={{
              x: bagMovement.x,
              y: bagMovement.y,
              rotate: bagMovement.rotation,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              mass: 1,
            }}
            style={{
              transformOrigin: "top center",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Bag body */}
            <div className="w-24 h-40 bg-gradient-to-b from-red-600 to-red-800 rounded-lg shadow-2xl border-2 border-red-700 relative overflow-hidden">
              {/* Uploaded Image Overlay */}
              {uploadedImage && (
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <img
                    src={uploadedImage}
                    alt="Stress target"
                    className="w-full h-full object-cover opacity-80"
                    style={{
                      maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.7) 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.7) 100%)',
                    }}
                  />
                  {/* Overlay to maintain bag appearance */}
                  <div className="absolute inset-0 bg-red-600/30 mix-blend-multiply"></div>
                </div>
              )}

              {/* Bag texture lines */}
              <div className="absolute inset-0 flex flex-col justify-evenly z-10">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-full h-0.5 bg-red-900 opacity-50"></div>
                ))}
              </div>

              {/* Bag highlight */}
              <div className="absolute top-4 left-2 w-4 h-8 bg-red-400 opacity-30 rounded-full blur-sm z-10"></div>
            </div>

            {/* Bottom cap */}
            <div className="w-24 h-6 bg-red-900 rounded-b-full border-2 border-red-700"></div>
          </motion.div>

          {/* Punch Effect */}
          <AnimatePresence>
            {showPunchEffect && (
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: punchPosition.x - 25,
                  top: punchPosition.y - 25,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-yellow-400 opacity-80 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-lg">POW!</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Combo Display */}
          <AnimatePresence>
            {gameStats.combo > 0 && (
              <motion.div
                className="absolute top-4 right-4"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
              >
                <Badge variant="secondary" className="text-lg px-3 py-1 bg-orange-500 text-white">
                  {gameStats.combo}x COMBO!
                </Badge>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-white/70 text-sm">Click the punching bag to punch!</p>
            <p className="text-white/50 text-xs mt-1">Build combos for higher scores</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4">
          <Button onClick={resetGame} variant="outline" className="flex items-center space-x-2">
            <RotateCcw className="w-4 h-4" />
            <span>Reset Game</span>
          </Button>
        </div>

        {/* Achievement Badges */}
        <div className="flex flex-wrap justify-center gap-2">
          {gameStats.totalPunches >= 10 && (
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Target className="w-3 h-3" />
              <span>Beginner Boxer</span>
            </Badge>
          )}
          {gameStats.maxCombo >= 10 && (
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Trophy className="w-3 h-3" />
              <span>Combo Master</span>
            </Badge>
          )}
          {gameStats.score >= 500 && (
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Trophy className="w-3 h-3" />
              <span>High Scorer</span>
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
