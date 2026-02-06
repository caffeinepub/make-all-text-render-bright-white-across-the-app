import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface FieldMultiSelectProps {
  fields: string[];
  selectedFields: string[];
  onChange: (fields: string[]) => void;
}

export default function FieldMultiSelect({
  fields,
  selectedFields,
  onChange,
}: FieldMultiSelectProps) {
  const toggleField = (field: string) => {
    if (selectedFields.includes(field)) {
      onChange(selectedFields.filter((f) => f !== field));
    } else {
      onChange([...selectedFields, field]);
    }
  };

  const clearAll = () => {
    onChange([]);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">
              Select Fields ({selectedFields.length})
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <div className="font-semibold">Select interested fields</div>
              <div className="grid gap-3 max-h-80 overflow-y-auto">
                {fields.map((field) => (
                  <div key={field} className="flex items-center space-x-2">
                    <Checkbox
                      id={field}
                      checked={selectedFields.includes(field)}
                      onCheckedChange={() => toggleField(field)}
                    />
                    <Label htmlFor={field} className="cursor-pointer flex-1">
                      {field}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {selectedFields.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearAll}>
            Clear All
          </Button>
        )}
      </div>

      {selectedFields.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedFields.map((field) => (
            <Badge key={field} variant="default" className="gap-1 pr-1">
              {field}
              <button
                onClick={() => toggleField(field)}
                className="ml-1 hover:bg-primary-foreground/20 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
