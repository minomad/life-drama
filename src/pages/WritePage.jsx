import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { usePocketData } from '@/api/usePocketData';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Form from '@/components/Form';

function WritePage() {
  const { createData } = usePocketData('drama');
  const navigation = useNavigate();

  const titleRef = useRef(null);
  const genreRef = useRef(null);
  const descRef = useRef(null);
  const imgRef = useRef(null);
  const uploadImgRef = useRef(null);

  const handleRegisterDrama = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', titleRef.current.value);
    formData.append('genre', genreRef.current.value);
    formData.append('desc', descRef.current.value);
    formData.append('img', imgRef.current.files[0]);

    if (!imgRef.current.files[0]) {
      alert('드라마 사진을 추가해주세요.');
      return;
    }

    if (!titleRef.current.value) {
      alert('제목을 입력해주세요.');
      return;
    }

    if (!genreRef.current.value) {
      alert('장르를 입력해주세요.');
      return;
    }

    if (!descRef.current.value) {
      alert('소개글을 입력해주세요.');
      return;
    }

    await createData(formData);
    try {
      if (confirm('등록하시겠습니까?')) {
        alert('등록 성공')
        navigation('/dramalist');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisplayUploadImg = (e) => {
    const imgFile = e.target.files[0];
    const imgUrl = URL.createObjectURL(imgFile);
    uploadImgRef.current.setAttribute('src', imgUrl);
  };

  return (
    <section>
      <Helmet>
        <title>글쓰기</title>
      </Helmet>
      <h2 className="py-5 text-center text-xl font-black">인생 드라마 추천하기</h2>
      <Form encType="multipart/form-data" onSubmit={handleRegisterDrama} addStyle={'min-h-screen'}>
        <div className="relative my-4 flex flex-col gap-2">
          <label htmlFor="img" className="sr-only">
            사진
          </label>
          <input
            ref={imgRef}
            onChange={handleDisplayUploadImg}
            type="file"
            name="img"
            id="img"
            accept="*.jpg,*.png,*.webp,*.avif"
            className="absolute h-full w-full cursor-pointer opacity-0"
            multiple
          />
          <div className="h-[140px] bg-secondary p-2">
            <img
              ref={uploadImgRef}
              className="h-[124px] border border-secondary"
              src="https://placehold.co/84x124?text=PHOTO"
              alt=""
            />
          </div>
        </div>
        <Input label="드라마 제목" type="text" id="title" placeholder="제목을 입력해주세요." inputRef={titleRef} />
        <Input label="장르" type="text" id="genre" placeholder="장르를 입력해주세요" inputRef={genreRef} />
        <TextArea id="review" placeholder="작품에 대한 소개를 짧게 남겨주세요." height={''} textareaRef={descRef} />
        <div className="flex gap-5 pt-2">
          <Button type="submit">등록하기</Button>
          <Button type="reset" hoverColor="hover:bg-rose-500">
            취소하기
          </Button>
        </div>
      </Form>
    </section>
  );
}
export default WritePage;
