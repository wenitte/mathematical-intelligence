The Cayley-Hamilton Theorem essentially states that every square matrix or linear operator on a finite-dimensional vector space, T, satisfies its own characteristic polynomial.

We firstly define the concept of a characteristic polynomial associated with T, labeled χT(x). This is the polynomial which vanishes when evaluated at T, as in χT(T) = 0. 

Similarly, we define the minimal polynomial associated with T, for every vector v in V. This states that there is a positive integer m, and coefficients in the Real numbers, such that T to the power of m times v can be expressed as the negative of the sigma notation from j=0 to m-1 of (aⱼ times T to the power of j times v). The minimal polynomial is denoted minP(T, v)(x).

A lemma, or assisting proposition, is introduced. The Characteristic Polynomial Factorization lemma states that the minimal polynomial associated with T, for any vector v in V, divides remainderless into the characteristic polynomial.

Another lemma, the Matrix Representation lemma, says that given any T that belongs to L(V), and assuming the dimension of V as n, there will exist a basis, and a real n-by-n matrix A that can be partitioned into a block form with a companion matrix B of the minimal polynomial, and the characteristic polynomial of A equals the product of the characteristic polynomials of B and D. The characteristic polynomial of B equals (-1) to the power of k times minP(T, v)(x).

To prove the Cayley-Hamilton Theorem we proceed in two steps. 

The base case involves showing that for every vector in V, the span {v, Tv, T²v, …, Tᵏ⁻¹v} is T-invariant. This means you can apply T to any element of the set and it stays within the set. Also, matrix A has a block form where B represents the T-invariant subspace, and the minimal polynomial divides the characteristic polynomial without remainder.

The inductive step illustrates that for every vector w in V, the characteristic polynomial evaluated at T times w equals the polynomial Q(T) times minP(T, w)(T) times w. This simplifies to Q(T)(0) which is equal to zero. 

By combining the base case with the inductive step we arrive at χT(T) = 0, which confirms the Cayley-Hamilton theorem. So, for every linear operator T in L(V), the characteristic polynomial of T evaluated at T equals zero. The proof is therefore complete.
