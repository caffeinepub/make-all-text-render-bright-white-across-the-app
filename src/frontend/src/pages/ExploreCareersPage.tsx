import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { careers, fields } from '../data/careers';
import FieldMultiSelect from '../components/FieldMultiSelect';
import AnimatedSection from '../components/AnimatedSection';

export default function ExploreCareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFields, setSelectedFields] = useState<string[]>([]);

  const filteredCareers = useMemo(() => {
    let filtered = careers;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (career) =>
          career.name.toLowerCase().includes(term) ||
          career.description.toLowerCase().includes(term)
      );
    }

    if (selectedFields.length > 0) {
      filtered = filtered.filter((career) =>
        career.fields.some((field) => selectedFields.includes(field))
      );
      // Sort by number of matching fields
      filtered.sort((a, b) => {
        const aMatches = a.fields.filter((f) => selectedFields.includes(f)).length;
        const bMatches = b.fields.filter((f) => selectedFields.includes(f)).length;
        return bMatches - aMatches;
      });
    }

    return filtered;
  }, [searchTerm, selectedFields]);

  return (
    <div className="container py-16">
      <AnimatedSection>
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Explore Careers</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover over 100 career paths and find the perfect match for your interests
          </p>
        </div>
      </AnimatedSection>

      <div className="space-y-6 mb-8">
        <AnimatedSection>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search careers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <FieldMultiSelect
            fields={fields}
            selectedFields={selectedFields}
            onChange={setSelectedFields}
          />
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <div className="mb-6 text-sm text-muted-foreground">
          Showing {filteredCareers.length} career{filteredCareers.length !== 1 ? 's' : ''}
          {selectedFields.length > 0 && ' (sorted by relevance)'}
        </div>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCareers.map((career, index) => (
          <AnimatedSection key={career.name}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="text-4xl">{career.emoji}</div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{career.name}</CardTitle>
                    <div className="flex flex-wrap gap-1">
                      {career.fields.map((field) => (
                        <Badge
                          key={field}
                          variant={selectedFields.includes(field) ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{career.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold">Education:</span>{' '}
                    <span className="text-muted-foreground">{career.education}</span>
                  </div>
                  <div>
                    <span className="font-semibold">Salary Range:</span>{' '}
                    <span className="text-muted-foreground">{career.salary}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      {filteredCareers.length === 0 && (
        <AnimatedSection>
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground">
                No careers found. Try adjusting your search or filters.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      )}
    </div>
  );
}
