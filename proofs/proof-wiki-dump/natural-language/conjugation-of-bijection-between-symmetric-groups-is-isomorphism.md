# 

Source: https://proofwiki.org/wiki/Conjugation_of_Bijection_between_Symmetric_Groups_is_Isomorphism


It has been suggested that this page be renamed.In particular: The name given here is inaccurate but I can't think of how best to word it right nowTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $A$ and $B$ be sets
Let $f$ be a bijection from $E$ to $F$.
Let $S_A$ and $S_B$ denote the set of all permutations on $A$ and $B$ respectively.

Let $\Phi: S_A \to S_B$ be the mapping defined as:

$\forall u \in S_A: \map \Phi u = f \circ u \circ f^{-1}$
where $\circ$ denotes composition of mappings.

Then $\Phi$ is an isomorphism from $S_A$ to $S_B$.


Proof
We have that $\struct {S_A, \circ}$ and $\struct {S_B, \circ}$ are the symmetric group on $S_A$ and $S_B$ respectively.
Hence we are about to prove that $\Phi$ is actually a group isomorphism.

Because $f$ is a bijection it follows from Inverse of Bijection is Bijection that $f^{-1}$ is also a bijection.
From Composite of Bijections is Bijection, it follows that $f \circ u \circ f^{-1}$ is also a bijection.
As $f \circ u \circ f^{-1}$ is from $S_B$ to $S_B$, it follows by definition that $f \circ u \circ f^{-1}$ is in fact a permutation on $B$.
Hence $\Phi$ maps a permutation on $A$ to a permutation on $B$, as stated by the question.

Let $u$ and $v$ be arbitrary permutations on $A$.
Then:














\(\ds \map \Phi u \circ \map \Phi v\)

\(=\)







\(\ds \paren {f \circ u \circ f^{-1} } \circ \paren {f \circ v \circ f^{-1} }\)





Definition of $\Phi$














\(\ds \)

\(=\)







\(\ds f \circ u \circ \paren {f^{-1} \circ f} \circ v \circ f^{-1}\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds f \circ u \circ I_A \circ v \circ f^{-1}\)





Composite of Bijection with Inverse is Identity Mapping














\(\ds \)

\(=\)







\(\ds f \circ \paren {u \circ v} \circ f^{-1}\)





Definition of Identity Mapping and Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds \map \Phi {u \circ v}\)





Definition of $\Phi$



This demonstrates that $\Phi$ is a (group) homomorphism.

Let $u, v \in S_A$ such that $u = v$.
Then:














\(\ds \map \Phi u\)

\(=\)







\(\ds \map \Phi v\)














\(\ds \leadsto \ \ \)





\(\ds f \circ u \circ f^{-1}\)

\(=\)







\(\ds f \circ v \circ f^{-1}\)





Definition of $\Phi$








\(\ds \leadsto \ \ \)





\(\ds \paren {f^{-1} \circ f} \circ u \circ \paren {f^{-1} \circ f}\)

\(=\)







\(\ds \paren {f^{-1} \circ f} \circ v \circ \paren {f^{-1} \circ f}\)





applying $f^{-1}$ and $f$ to either end, and Composition of Mappings is Associative








\(\ds \leadsto \ \ \)





\(\ds I_S \circ u \circ I_S\)

\(=\)







\(\ds I_S \circ v \circ I_S\)





Composite of Bijection with Inverse is Identity Mapping








\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds v\)





Definition of Identity Mapping



So we have:

$\map \Phi u = \map \Phi v \implies u = v$
and by definition $\Phi$ is injective.

Let $w \in S_B$.
Let $g: S_A \to S_B$ be defined as:

$g := f^{-1} \circ w \circ f$
Then from Inverse of Bijection is Bijection and Composite of Bijections is Bijection as above:

$g$ is a bijection from $S_A$ to $S_B$.

Thus we have:














\(\ds \map \Phi g\)

\(=\)







\(\ds f \circ \paren {f^{-1} \circ w \circ f} \circ f^{-1}\)





Definitions of $\Phi$ and $g$














\(\ds \)

\(=\)







\(\ds \paren {f \circ f^{-1} } \circ w \circ \paren {f \circ f^{-1} }\)





Composition of Mappings is Associative














\(\ds \)

\(=\)







\(\ds I_T \circ w \circ I_T\)





Composite of Bijection with Inverse is Identity Mapping














\(\ds \)

\(=\)







\(\ds w\)





Definition of Identity Mapping



Thus $\forall w \in S_B: \exists g \in S_A: \map \Phi g = w$
That is: $\Phi$ surjective.

Thus $\Phi$ has been shown to be a bijective (group) homomorphism.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.5$




