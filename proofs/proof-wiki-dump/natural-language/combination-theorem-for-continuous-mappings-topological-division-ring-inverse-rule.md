# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Mappings/Topological_Division_Ring/Inverse_Rule

Theorem
Let $\struct {S, \tau_{_S} }$ be a topological space.
Let $\struct {R, +, *, \tau_{_R} }$ be a topological division ring.

Let $g: \struct {S, \tau_{_S} } \to \struct {R, \tau_{_R} }$ be a continuous mapping.

Let $U = S \setminus \set {x : \map g x = 0}$
Let $g^{-1}: U \to R$ be the mapping defined by:

$\forall x \in U : \map {g^{-1} } x = \map g x^{-1}$
Let $\tau_{_U}$ be the subspace topology on $U$.

Then:

$g^{-1}: \struct {U, \tau_{_U} } \to \struct {R, \tau_{_R} }$ is continuous.


Proof
Let $R^* = R \setminus \set 0$.
Let $\tau^*$ be the subspace topology on $R^*$.
By definition of a topological division ring:

$\phi: \struct {R^*, \tau^*} \to \struct {R, \tau_{_R} }$ such that $\forall x \in R^*: \map \phi x = x^{-1}$ is a continuous mapping

Let $g^*: \struct {U, \tau_{_U} } \to \struct {R^*, \tau^*}$ be the restriction of $g$ to $U \subseteq R$.
From Restriction of Continuous Mapping is Continuous, $g^*$ is a continuous mapping.

From Composite of Continuous Mappings is Continuous, the composition $\phi \circ g^* : \struct {U, \tau_{_U} } \to \struct {R, \tau_{_R} }$ is continuous.

Now:










\(\ds \forall x \in U: \, \)



\(\ds \map {\paren {g^{-1} } } x\)

\(=\)







\(\ds \map g x^{-1}\)





Definition of $g^{-1}$














\(\ds \)

\(=\)







\(\ds \map \phi {\map g x}\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \map \phi {\map {g^*} x}\)





Since $\map g x \ne 0$














\(\ds \)

\(=\)







\(\ds \map {\paren {\phi \circ g^*} } x\)





Definition of Composition of Mappings



From Equality of Mappings:

$g^{-1} = \phi \circ g^*$
The result follows.
$\blacksquare$





