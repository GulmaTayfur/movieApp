import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { FaTrash } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
const Detail = () => {
  const navigate = useNavigate();
  // 1) url'den param olan film idsini al
  const { id } = useParams();

  // 2) api'den film verilerini al
  const { data, error, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: () => api.get(`/movies/${id}`),
  });

  console.log(data);
  const movie = data?.data;

  const r = +movie?.rating;

  const color = r > 9 ? "blue" : r > 7.5 ? "green" : r > 5 ? "orange" : "red";

  const handleDelete = () => {
    api
      .delete(`/movies/${movie.id}`)
      .then((res) => navigate("/"))
      .catch((err) => console.log("hataa", err));
  };

  return (
    <div className="p-10">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <>
            <div>
              <div className="flex justify-end">
                <button
                  onClick={handleDelete}
                  className="bg-red-600 text-white p-2 rounded-md hover:bg-red-400"
                >
                  <FaTrash />
                </button>
              </div>

              <div className="flex flex-col gap-10 items-center md:flex-row ">
                <div>
                  <img
                    className="rounded-md"
                    src="https://picsum.photos/250/400"
                    alt="poster"
                  />
                </div>

                <div className="flex flex-col gap-10">
                  {/* BAŞLIK */}
                  <h1 className="text-3xl font-semibold">
                    {movie.title} <span>({movie.year})</span>
                  </h1>

                  {/* SKOR */}
                  <p>
                    <span className="font-semibold me-3">İzleyici Skoru</span>
                    <span
                      style={{ background: color }}
                      className="p-2 rounded-full text-white font-semibold "
                    >
                      {movie.rating}
                    </span>
                  </p>
                  {/* BUTONLAR */}
                  <div className="flex gap-5">
                    <button className="bg-gray-800 text-white p-3 rounded-full">
                      <FaRegHeart />
                    </button>
                    <button className="bg-gray-800 text-white p-3 rounded-full">
                      <FaRegBookmark />
                    </button>
                    <button className="bg-gray-800 text-white p-3 rounded-full">
                      <FaRegStar />
                    </button>
                    <button className="bg-gray-800 text-white p-3 rounded-full">
                      <BiCameraMovie />
                    </button>
                  </div>
                  {/* KATEGORİLER */}
                  <div className="flex gap-5 items-center">
                    <p className="font-semibold">Kategoriler:</p>
                    <p className="flex gap-3">
                      {movie.genre.map((genre) => (
                        <span className="bg-yellow-500 py-1 px-3 rounded-full text-white">
                          {genre}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Detail;
