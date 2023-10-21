import { LoadCategoryById } from "@/domain/usecases/product";
import { NotFoundError } from "@/domain/errors/shared";
import { LoadCategoryByIdRepository } from "@/data/contracts/repositories/product";

export class DbLoadCategoryById implements LoadCategoryById {
  constructor(
    private readonly loadCategoryByIdRepository: LoadCategoryByIdRepository,
  ) {}

  async load(categoryId: string): Promise<LoadCategoryById.Result> {
    const category = await this.loadCategoryByIdRepository.loadById(categoryId);

    if(category === null) {
      throw new NotFoundError('Category');
    };

    return category;
  }
}

