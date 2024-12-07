This is a proof of Minkowski's Theorem. 

Minkowski's Theorem is a concept in the field of mathematics, specifically in geometry and number theory. It states that for any subset C of d-dimensional real space (ℝᵈ), provided that the subset is symmetric (can be rotated or reflected to get the same shape), convex (all points on the line segment connecting any two points within the subset are also within the subset), bounded (it has a limit and can’t stretch out to infinity) and it has a volume greater than 2ᵈ (where d is the dimensionality of the set), there must exist a non-zero point z in the set of integers (ℤᵈ), such that z is also contained in C.

The proof of Minkowski's theorem makes use of two approaches, contradiction and Blichfeldt’s lemma.

Firstly, the set C is scaled down by a factor of one-half (½·C), forming a new set C′, the volume of which is still greater than 1. There is a claim that there exists a non-zero integer point in the translation of C′.

The reasoning is as follows: For any point x within C′ and point v also within C′, the negative of x (-x) is still within C′ due to the symmetry of the set, and (1/2)v could be represented as the summation of two points within C′, proving that it also falls within C′ due to the set's convexity.

The contradiction arises when assuming that the intersection of the integer points in the set difference of C′ from C′ is zero. That is to say, there’s no non-zero integer point within C′ that can be translated by an integer vector to another point within C′. However, it can be shown that some translations of C′ should intersect due to the large volume of C, which contradicts the assumption.

The second approach used is Blichfeldt's Lemma, which states that any measurable set with volume greater than some integer k intersects itself upon translation by an integer vector. This is shown by partitioning the set into subcubes and counting overlaps, which then hints at the existence of non-zero integer points within the original set.

From both these approaches, the Minkowski’s theorem, as presented, is thus proven.