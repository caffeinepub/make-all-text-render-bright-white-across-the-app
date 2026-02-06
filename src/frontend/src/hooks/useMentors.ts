import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Mentor } from '../backend';

export function useListMentors(searchTerm: string = '') {
  const { actor, isFetching } = useActor();

  return useQuery<Mentor[]>({
    queryKey: ['mentors', searchTerm],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listMentors(searchTerm);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetMentor(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<Mentor>({
    queryKey: ['mentor', id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getMentorById(id);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCreateMentor() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; contactInfo: string; qualifications: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.createMentor(data.name, data.contactInfo, data.qualifications);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mentors'] });
    },
  });
}
