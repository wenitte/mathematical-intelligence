# 

Source: https://proofwiki.org/wiki/Inverse_Image_Mapping_is_Lower_Adjoint_to_Composite_Involving_Direct_Image_Mapping


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S, T$ be sets.
Let $f: S \to T$ be a mapping.

Let $f^\to : \powerset S \to \powerset T$ denote the direct image mapping.
Let $f^\gets : \powerset T \to \powerset S$ denote the inverse image mapping.

Let $\complement_S: \powerset S \to \powerset S$ denote the relative complement mapping on the power set of $S$.
Let $\complement_T: \powerset T \to \powerset T$ denote the relative complement mapping on the power set of $T$.

Then:

$f^\gets : \powerset T \to \powerset S$ is the lower adjoint to $\complement_T \circ f^\to \circ \complement_S : \powerset S \to \powerset T$

That is:

$\forall A \subseteq S, B \subseteq T : \map {f^\gets} B \subseteq A$ if and only if $B \subseteq T \setminus \map {f^\to} {S \setminus A}$
Proof
We have:










\(\ds \forall A \subseteq S, B \subseteq T: \, \)



\(\ds \map {f^\gets} B\)

\(\subseteq\)







\(\ds A\)














\(\ds \leadstoandfrom \ \ \)





\(\ds f^{-1} \sqbrk B\)

\(\subseteq\)







\(\ds A\)





Definition of Inverse Image Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds B\)

\(\subseteq\)







\(\ds T \setminus f \sqbrk {S \setminus A}\)





Preimage is Subset Iff Subset of Complement of Image of Complement














\(\ds \)

\(=\)







\(\ds T \setminus \map {f^\to} {S \setminus A}\)





Definition of Direct Image Mapping














\(\ds \)

\(=\)







\(\ds \relcomp T {\map {f^\to} {\relcomp S A} }\)





Definition of Relative Complement














\(\ds \)

\(=\)







\(\ds \map {\complement_T \circ f^\to \circ \complement_S} A\)





Definition of Composition of Mappings




By definition of Galois connection:

$\tuple{\complement_T \circ f^\to \circ \complement_S, f^\gets}$ is a Galois connection
It follows that $f^\gets : \powerset T \to \powerset S$ is the lower adjoint to $\complement_T \circ f^\to \circ \complement_S : \powerset S \to \powerset T$
$\blacksquare$





