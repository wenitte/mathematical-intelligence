The Abel-Ruffini theorem states that there is no general solution in radicals for polynomials of degree five or higher. In other words, it's not always possible to solve fifth or higher degree equations using only the algebraic operations (addition, subtraction, multiplication, division) and n-th roots.

Now, we can relate the solvability of a polynomial to the characteristics of its Galois group. A Galois group is a mathematical concept related to the roots of a polynomial. For our polynomial, let P, defined as f(x) = (x - y₁)(x - y₂)...(x - yₙ), the roots are represented as y₁, ..., yₙ. These roots are independent transcendental elements over the field Q, which consists of rational numbers.

We then compute coefficients of f(x) as elementary symmetric functions of its roots. Any permutation of roots won't change the overall polynomial.

The Galois group of this polynomial, G, imitates the symmetric group of n elements. This is because, in essence, the Galois group captures how roots of the polynomial permute when acted upon by field elements.

A composition series looks at the traditional symmetry group, Sₙ, and presents a 'chain' of subgroups, ending with a trivial group only containing the identity element, e. For n greater than or equal to 5, one of these subgroups, Aₙ, is simple yet non-abelian, i.e., cannot be broken down into smaller normal subgroups. Thus, the symmetric group is not solvable for these degrees.

Now, if the Galois group is isomorphic to the symmetric group Sₙ for any polynomial of degree n greater than or equal to 5, it means that the polynomial doesn't have a solution in radicals. 

However, it's worth noting that this observation only applies in general. There are specific cases where polynomials of degree n greater than or equal to 5 do have solvable Galois groups. For example, the polynomial x⁵ - 1 has a Galois group that's abelian and, thus, solvable.

To sum up, while there are exceptions, the general rule is that polynomials of degree five and higher can't be solved using radicals. The Abel-Ruffini theorem provides a proof of this in relation to Galois groups and their symmetries.