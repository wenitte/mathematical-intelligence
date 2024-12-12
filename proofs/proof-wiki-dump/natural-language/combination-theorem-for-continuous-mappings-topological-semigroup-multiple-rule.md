# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Mappings/Topological_Semigroup/Multiple_Rule

Theorem
Let $\struct {S, \tau_S}$ be a topological space.
Let $\struct {G, *, \tau_G}$ be a topological semigroup.

Let $\lambda \in G$.
Let $f: \struct {S, \tau_S} \to \struct {G, \tau_G}$ be a continuous mapping.

Let $\lambda * f: S \to G$ be the mapping defined by:

$\forall x \in S: \map {\paren {\lambda * f} } x = \lambda * \map f x$
Let $f * \lambda: S \to G$ be the mapping defined by:

$\forall x \in S: \map {\paren {f * \lambda} } x = \map f x * \lambda$

Then:

$\lambda * f: \struct {S, \tau_S} \to \struct {G, \tau_G}$ is a continuous mapping
$f * \lambda: \struct {S, \tau_S} \to \struct {G, \tau_G}$ is a continuous mapping.


Proof
Let $c_\lambda : S \to G$ be the constant mapping defined by:

$\forall x \in S: \map {c_\lambda} x = \lambda$
From Constant Mapping is Continuous, $c_\lambda$ is continuous.
From Product Rule for Continuous Mappings to Topological Semigroup:

$c_\lambda * f$ and $f * c_\lambda$ are continuous.
Now:










\(\ds \forall x \in S: \, \)



\(\ds \map {\paren {c_\lambda * f} } x\)

\(=\)







\(\ds \map {c_\lambda} x * \map f x\)





Definition of $c_\lambda * f$














\(\ds \)

\(=\)







\(\ds \lambda * \map f x\)





Definition of $c_\lambda$














\(\ds \)

\(=\)







\(\ds \map {\paren {\lambda * f} } x\)





Definition of $\lambda * f$



From Equality of Mappings:

$c_\lambda * f = \lambda * f$
Similarly:

$f * c_\lambda = f * \lambda$
The result follows.
$\blacksquare$





