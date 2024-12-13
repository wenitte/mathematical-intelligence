# 

Source: https://proofwiki.org/wiki/Oscillation_on_Set_is_an_Extended_Real_Number

Theorem
Let $f: D \to \R$ be a real function where $D \subseteq \R$.
Let $x$ be a point in $D$.
Let $I$ be a real set that contains (as an element) $x$.
Let $\map {\omega_f} {I \cap D}$ be the oscillation of $f$ on $I \cap D$:

$\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$

Then:

$\map {\omega_f} {I \cap D} \in \overline \R_{\ge 0}$
and:

$\map {\omega_f} {I \cap D} = \begin{cases}
\text{a positive real number} & \set {\size {\map f y - \map f z}: y, z \in I \cap D} \text{is bounded above} \\
\infty & \set {\size {\map f y - \map f z}: y, z \in I \cap D} \text{is not bounded above}
\end{cases}$


Proof
We observe that $\size {\map f y - \map f z} = 0$ for $y = z = x$.
Therefore:

$0 \in \set {\size {\map f y - \map f z}: y, z \in I \cap D}$ as $x \in I \cap D$
Accordingly:

$\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ is non-empty

We have that $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ is a real set as $\size {\map f y - \map f z} \in \R$ for every $y, z \in D$.
Every real number is less than $\infty$.
Therefore:

$\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ is bounded above in $\overline \R$

There are two cases: either $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ is bounded above (in $\R$), or it is not.

First, assume that:

$\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ is bounded above (in $\R$)

We have that $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ is bounded above and non-empty.
Therefore:

$\sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$ exists as a real number by the Continuum Property

We know that $\sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$ is greater than or equal to every element of $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$.
Also $0 \in \set {\size {\map f y - \map f z}: y, z \in I \cap D}$.
Therefore, $\sup \set {\size {\map f y - \map f z}: y, z \in I \cap D} \ge 0$.
We also have that $\sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$ exists as a real number.
Therefore, $\sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$ is a positive real number.
In other words:

$\map {\omega_f} {I \cap D}$ is a positive real number as $\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$

Next, assume that:

$\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ is not bounded above (in $\R$)

We have that $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ is bounded above in $\overline \R$.
Therefore, $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ has $\infty$ as an upper bound.
A number that is less than $\infty$ is a real number or equal to $-\infty$.
No real number is an upper bound for $\set {\size {\map f y - \map f z} y, z \in I \cap D}$ as $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ is not bounded above in $\R$.
$-\infty$ is not an upper bound for $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ as this set contains $0$.
Therefore, $\infty$ is the only upper bound for $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$.
Accordingly, $\infty$ is the least upper bound of $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$.
In other words:

$\map {\omega_f} {I \cap D} = \infty$ as $\map {\omega_f} {I \cap D} = \sup \set {\size {\map f y - \map f z}: y, z \in I \cap D}$

In either case, whether $\set {\size {\map f y - \map f z}: y, z \in I \cap D}$ is bounded above or not:

$\map {\omega_f} {I \cap D} \in \overline \R_{\ge 0}$.
$\blacksquare$





