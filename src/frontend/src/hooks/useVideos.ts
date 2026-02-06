import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { VideoSubmission } from '../backend';

export function useListVideos(searchTerm: string = '') {
  const { actor, isFetching } = useActor();

  return useQuery<VideoSubmission[]>({
    queryKey: ['videos', searchTerm],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listVideos(searchTerm);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetVideo(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<VideoSubmission>({
    queryKey: ['video', id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getVideoById(id);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitVideo() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; qualifications: string; videoUrl: string }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitVideo(data.name, data.qualifications, data.videoUrl);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['videos'] });
    },
  });
}
