{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMeatadata = Omit<Video, 'url' | 'data'> 

  function getVideo02(id: string): Video{
    return {
      id,
      title: 'video',
      url: 'https://...',
      data: 'byte-data..',
    };
  };

  function getVideoMetadata02(id: string): VideoMeatadata {
    return {
      id: id,
      title: 'title',
    };
  };

}