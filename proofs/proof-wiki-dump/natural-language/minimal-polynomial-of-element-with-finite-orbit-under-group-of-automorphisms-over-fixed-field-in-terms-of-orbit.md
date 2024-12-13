# 

Source: https://proofwiki.org/wiki/Minimal_Polynomial_of_Element_with_Finite_Orbit_under_Group_of_Automorphisms_over_Fixed_Field_in_terms_of_Orbit



Theorem
Let $E$ be a field.
Let $G \le \Aut E$ be a subgroup of its automorphism group.
Let $F = \map {\operatorname {Fix_E} } G$ be its fixed field.
Let $\alpha \in E$ have a finite orbit under $G$.

Then $\alpha$ is algebraic over $F$ and the product of polynomials

$\ds \map p x = \prod_{\beta \mathop \in \Lambda} \paren {x - \beta}$
is the minimal polynomial of $\alpha$ over $F$.


Proof
By Product over Finite Set with Zero Factor, we have $\map p \alpha = 0$.
By definition, $p \in E \sqbrk x$.


$p$ has coefficients in $F$
We show that $p \in F \sqbrk x$.
Let $\sigma \in G$, and denote the induced automorphism of $E[x]$ still by $\sigma$.
We show that $\map \sigma p = p$.
We have:














\(\ds \map \sigma p\)

\(=\)







\(\ds \prod_{\beta \mathop \in \Lambda} \map \sigma {x - \beta}\)





Ring Homomorphism Commutes with Product over Finite Set














\(\ds \)

\(=\)







\(\ds \prod_{\beta \mathop \in \Lambda} \paren {x - \map \sigma \beta}\)





Definition of Induced Automorphism of Polynomial Ring














\(\ds \)

\(=\)







\(\ds \prod_{\beta \mathop \in \Lambda} \paren {x - \beta}\)





Group Element Permutes Orbit under Group of Permutations, Change of Variables in Product over Finite Set














\(\ds \)

\(=\)







\(\ds p\)









Because this is true for all $\sigma \in G$, indeed the coefficients of $p$ are in $\Fix G = F$.
Thus $p \in F \sqbrk x$.


$p$ is the minimal polynomial
By Product of Monic Polynomials is Monic, $p$ is monic.
In particular, $p$ is nonzero.
Thus $\alpha$ is algebraic over $F$.
Let $f$ be its minimal polynomial over $F$.
We show that $f = p$.
By definition and because $\map p \alpha = 0$, $f$ divides $p$.
By Group of Automorphisms is Contained in Automorphism Group over Fixed Field, $G \le \Aut {E/F}$.
By Automorphism Group of Field Extension Permutes Roots of Minimal Polynomial, each $\beta \in \Lambda$ is a root of $f$.
By Polynomial Factor Theorem, each $x - \beta$ divides $f$.
By Product of Pairwise Coprime Divisors of Polynomial over Field is Divisor, $p$ divides $f$.
By Monic Polynomials are Equal iff Divide Each Other, $p = f$.
$\blacksquare$





