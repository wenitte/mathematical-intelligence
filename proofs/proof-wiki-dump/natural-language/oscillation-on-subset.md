# 

Source: https://proofwiki.org/wiki/Oscillation_on_Subset

Theorem
Let $f: D \to \R$ be a real function where $D \subseteq \R$.
Let $x$ be a point in $D$.
Let $S_x$ be a set of real sets that contain (as an element) $x$.
Let $I$ be an element of $S_x$.
Let $\map {\omega_f} {I \cap D}$ be the oscillation of $f$ on $I \cap D$:

$\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$

Let $I \in S_x$.
Let $\map {\omega_f} {I \cap D} \in \R$.
Let $J \in S_x$ be a subset of $I$.

Then:

$\map {\omega_f} {J \cap D} \in \R$
$\map {\omega_f} {J \cap D} \le \map {\omega_f} {I \cap D}$


Proof
Let:

$I, J \in S_x$
$J \subset I$
$\map {\omega_f} {I \cap D} \in \R$
where:

$\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$
We need to prove:

$\map {\omega_f} {J \cap D} \in \R$
$\map {\omega_f} {J \cap D} \le \map {\omega_f} {I \cap D}$

We intend to prove that $\map {\omega_f} {J \cap D} \in \R$.
We start by proving that $\set {\size {\map f y - \map f z}: y, z \in J \cap D}$ is bounded above and non-empty.

We have that $J$ is a subset of $I$.
Therefore:

$\set {\size {\map f y - \map f z}: y, z \in J \cap D}$ is a subset of $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$.
The statement $\map {\omega_f} {I \cap D} \in \R$ means that $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ admits a supremum.
Therefore, $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ is bounded above.
Accordingly:

$\set {\size {\map f y - \map f z}: y, z \in J \cap D}$ is bounded above as $\set {\size {\map f y - \map f z}: y, z \in J \cap D}$ is a subset of $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$

We observe that $\size {\map f y - \map f z} = 0$ for $y = z = x$.
Therefore, $0 \in \set {\size {\map f y - \map f z}: y, z \in J \cap D}$ as $x \in J \cap D$.
Accordingly:

$\set {\size {\map f y - \map f z}: y, z \in J \cap D}$ is non-empty

We have that $\set {\size {\map f y - \map f z}: y, z \in J \cap D}$ is a real set as $\size {\map f y - \map f z} \in \R$ for every $y, z \in D$.
We have shown that $\set {\size {\map f y - \map f z}: y, z \in J \cap D}$ is non-empty and bounded above.
Therefore, $\set {\size {\map f y - \map f z}: y, z \in J \cap D}$ admits a supremum by the Continuum Property.
In other words:














\(\ds \sup \set {\size {\map f y - \map f z}: y, z \in J \cap D}\)

\(\in\)







\(\ds \R\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \map {\omega_f} {J \cap D}\)

\(\in\)







\(\ds \R\)





definition




We finished proving that $\map {\omega_f} {J \cap D} \in \R$.
It remains to prove that $\map {\omega_f} {J \cap D} \le \map {\omega_f} {I \cap D}$.

We have:

$\set {\size {\map f y - \map f z}: y, z \in J \cap D}$ is a subset of $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$
$\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ admits a supremum
$\set {\size {\map f y - \map f z}: y, z \in J \cap D}$ admits a supremum
Then:














\(\ds \sup \set {\size {\map f y - \map f z}: y, z \in J \cap D}\)

\(\le\)







\(\ds \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}\)





Supremum of Subset








\(\ds \leadstoandfrom \ \ \)





\(\ds \map {\omega_f} {J \cap D}\)

\(\le\)







\(\ds \map {\omega_f} {I \cap D}\)





definitions



$\blacksquare$





