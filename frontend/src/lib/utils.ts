export const localizeGenre = (genre: string) => {
  const genreLocalization: { [key in string]: string } = {
    action: 'Экшен',
    horror: 'Ужасы',
    comedy: 'Комедия',
    fantasy: 'Фэнтези',
  };
  return genreLocalization[genre];
};
