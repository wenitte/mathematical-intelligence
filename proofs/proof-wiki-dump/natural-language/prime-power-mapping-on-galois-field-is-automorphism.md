# 

Source: https://proofwiki.org/wiki/Prime_Power_Mapping_on_Galois_Field_is_Automorphism

Theorem
Let $\GF$ be a Galois field whose zero is $0_\GF$ and whose characteristic is $p$.
Let $\sigma: \GF \to \GF$ be defined as:

$\forall x \in \GF: \map \sigma x = x^p$

Then $\sigma$ is an automorphism of $\GF$.


Proof
Let $x, y \in \GF$.
Then:














\(\ds \map \sigma {x y}\)

\(=\)







\(\ds \paren {x y}^p\)





Definition of $\sigma$














\(\ds \)

\(=\)







\(\ds x^p y^p\)





Power of Product of Commutative Elements in Group














\(\ds \)

\(=\)







\(\ds \map \sigma x \map \sigma y\)





Definition of $\sigma$




and:














\(\ds \map \sigma {x + y}\)

\(=\)







\(\ds \paren {x + y}^p\)





Definition of $\sigma$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^p \dbinom p k x^k y^{p - k}\)





Binomial Theorem














\(\ds \)

\(\equiv\)







\(\ds x^p + y^p\)

\(\ds \pmod p\)



Power of Sum Modulo Prime














\(\ds \)

\(=\)







\(\ds \map \sigma x + \map \sigma y\)





Definition of $\sigma$



Thus it has been demonstrated that $\sigma$ is a homomorphism.

Then we have:














\(\ds \map \ker \sigma\)

\(=\)







\(\ds \set {x \in \GF: \map \sigma x = 0_\GF}\)





Definition of Kernel of Ring Homomorphism














\(\ds \)

\(=\)







\(\ds \set {x \in \GF: x^p = 0_\GF}\)





Definition of $\sigma$














\(\ds \)

\(=\)







\(\ds \set {x \in \GF: x = 0_\GF}\)





Congruence of Powers














\(\ds \)

\(=\)







\(\ds \set {0_\GF}\)





Congruence of Powers



From Kernel is Trivial iff Monomorphism, $\sigma$ is a monomorphism.
That is, $\sigma$ is an injection.
Then from Injection from Finite Set to Itself is Surjection, $\sigma$ is a surjection.

Thus $\sigma$ is a bijective homomorphism to itself.
The result follows by definition of automorphism.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $3$: Field Theory: Definition and Examples of Field Structure: $\S 89 \gamma$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $15$




