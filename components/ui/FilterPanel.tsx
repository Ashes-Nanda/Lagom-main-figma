import React from 'react';
import { X, Filter, ChevronDown } from 'lucide-react';
import { Button } from './button';
import { Badge } from './badge';
import { Checkbox } from './checkbox';
import { Label } from './label';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './collapsible';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterGroup {
  id: string;
  label: string;
  type: 'checkbox' | 'select' | 'price-range';
  options: FilterOption[];
  multiple?: boolean;
}

export interface ActiveFilter {
  groupId: string;
  optionId: string;
  label: string;
}

interface FilterPanelProps {
  filterGroups: FilterGroup[];
  activeFilters: ActiveFilter[];
  onFilterChange: (groupId: string, optionId: string, checked: boolean) => void;
  onClearAll: () => void;
  onClearFilter: (groupId: string, optionId: string) => void;
  className?: string;
  showActiveFilters?: boolean;
}

export function FilterPanel({
  filterGroups,
  activeFilters,
  onFilterChange,
  onClearAll,
  onClearFilter,
  className = "",
  showActiveFilters = true
}: FilterPanelProps) {
  const [openGroups, setOpenGroups] = React.useState<Set<string>>(
    new Set(filterGroups.map(group => group.id))
  );

  const toggleGroup = (groupId: string) => {
    const newOpenGroups = new Set(openGroups);
    if (newOpenGroups.has(groupId)) {
      newOpenGroups.delete(groupId);
    } else {
      newOpenGroups.add(groupId);
    }
    setOpenGroups(newOpenGroups);
  };

  const isOptionActive = (groupId: string, optionId: string) => {
    return activeFilters.some(filter => 
      filter.groupId === groupId && filter.optionId === optionId
    );
  };

  const renderFilterGroup = (group: FilterGroup) => {
    const isOpen = openGroups.has(group.id);

    if (group.type === 'select') {
      const activeOption = activeFilters.find(filter => filter.groupId === group.id);
      
      return (
        <div key={group.id} className="space-y-2">
          <Label className="text-sm font-medium">{group.label}</Label>
          <Select
            value={activeOption?.optionId || ""}
            onValueChange={(value) => {
              // Clear existing selection first
              if (activeOption) {
                onFilterChange(group.id, activeOption.optionId, false);
              }
              // Add new selection if not empty
              if (value) {
                onFilterChange(group.id, value, true);
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder={`Select ${group.label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All {group.label}</SelectItem>
              {group.options.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.label}
                  {option.count !== undefined && (
                    <span className="text-muted-foreground ml-1">({option.count})</span>
                  )}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    return (
      <Collapsible key={group.id} open={isOpen} onOpenChange={() => toggleGroup(group.id)}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-between p-0 h-auto font-medium text-sm"
          >
            {group.label}
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 mt-2">
          {group.options.map((option) => {
            const isActive = isOptionActive(group.id, option.id);
            
            return (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`${group.id}-${option.id}`}
                  checked={isActive}
                  onCheckedChange={(checked) => 
                    onFilterChange(group.id, option.id, checked as boolean)
                  }
                />
                <Label
                  htmlFor={`${group.id}-${option.id}`}
                  className="text-sm cursor-pointer flex-1 flex justify-between"
                >
                  <span>{option.label}</span>
                  {option.count !== undefined && (
                    <span className="text-muted-foreground">({option.count})</span>
                  )}
                </Label>
              </div>
            );
          })}
        </CollapsibleContent>
      </Collapsible>
    );
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filters</span>
        </div>
        {activeFilters.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear all
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {showActiveFilters && activeFilters.length > 0 && (
        <div className="space-y-2">
          <Label className="text-sm font-medium">Active Filters</Label>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <Badge
                key={`${filter.groupId}-${filter.optionId}`}
                variant="secondary"
                className="flex items-center gap-1 pr-1"
              >
                {filter.label}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onClearFilter(filter.groupId, filter.optionId)}
                  className="h-4 w-4 p-0 hover:bg-transparent"
                  aria-label={`Remove ${filter.label} filter`}
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Filter Groups */}
      <div className="space-y-4">
        {filterGroups.map(renderFilterGroup)}
      </div>
    </div>
  );
}