# 

Source: https://proofwiki.org/wiki/Complement_of_Bounded_Set_has_Exactly_One_Unbounded_Component



Theorem
Let $n \in \N_{> 1}$
Let $A \subseteq \R^n$ be a bounded subspace of real Euclidean $n$-space.

Then, $\R^n \setminus A$ has exactly one unbounded component.


Proof
By definition of bounded, there exists some $\bsx_0 \in \R^n$ and $\epsilon > 0$ such that:

$A \subseteq \map {B_\epsilon} {\bsx_0}$
Existence
First, we will show that there is some unbounded component in $\R^n \setminus A$.
Let $t \ge \epsilon$ be arbitrary.
Let $\bsx_t = \bsx_0 + \tuple {t, 0, \dotsc, 0}$.
Then:














\(\ds \norm {\bsx_t - \bsx_0}\)

\(=\)







\(\ds \norm {\bsx_0 + \tuple {t, 0, \dotsc, 0} - \bsx_0}\)




















\(\ds \)

\(=\)







\(\ds \norm {\tuple {t, 0, \dotsc, 0} }\)




















\(\ds \)

\(=\)







\(\ds t\)




















\(\ds \)

\(\ge\)







\(\ds \epsilon\)









Therefore:

$\bsx_t \notin \map {B_\epsilon} {\bsx_0} \supseteq A$
Hence:

$\bsx_t \in \R^n \setminus A$
for all $t \ge \epsilon$.

Let $T = \set {\bsx_t : t \ge \epsilon}$.
From the above remarks:

$T \subseteq \R^n \setminus A$
We will show that $T$ is connected and unbounded.
It will then immediately follows that the component containing $T$ has the same properties.

Aiming for a contradiction, suppose $T$ is bounded.
Then, by definition of bounded, there exists some $K \in \R$ such that:

$\forall \bsx \in T: \map d {\bsx, \bsx_\epsilon} \le K$
As:

$\map d {\bsx_\epsilon, \bsx_\epsilon} \le K$
we have by Metric Space Axiom $(\text M 1)$:

$0 \le K$
But then, we have:














\(\ds \map d {\bsx_{\epsilon + K + 1}, \bsx_\epsilon}\)

\(=\)







\(\ds \norm {\bsx_0 + \tuple {\epsilon + K + 1, 0, \dotsc, 0} - \bsx_0 - \tuple {\epsilon, 0, \dotsc, 0} }\)




















\(\ds \)

\(=\)







\(\ds \norm {\tuple {K + 1, 0, \dotsc, 0} }\)




















\(\ds \)

\(=\)







\(\ds K + 1\)




















\(\ds \)

\(>\)







\(\ds K\)









which is a contradiction.
Therefore, by Proof by Contradiction:

$T$ is unbounded.
$\Box$

Let $\bsx_t, \bsx_{t'} \in T$ be arbitrary.
Without loss of generality, suppose $t \le t'$.
Define $f : \closedint 0 1 \to T$ as:

$\map f s = \tuple {t + \paren {t' - t} s, 0, \dotsc, 0}$
$f$ is well-defined, as for any $s \in \closedint 0 1$, we have:

$0 \le \paren {t' - t} s \le t' - t$
and therefore:

$t \le t + \paren {t' - t} s \le t'$
$f$ is also continuous, as:

$\size {s - s'} < \dfrac \epsilon {\size {t' - t}} \implies \norm {\map f s - \map f {s'}} = \size {s - s'} \norm {\tuple {t' - t, 0, \dotsc, 0}} < \epsilon$
for every $\epsilon$, provided that $t \ne t'$.
If $t = t'$, then $f$ is continuous by Constant Mapping is Continuous.

Therefore:

$\bsx_t$ and $\bsx_{t'}$ are path-connected in $T$
As $\bsx_t$ and $\bsx_{t'}$ were arbitrary:

$T$ is path-connected
By Path-Connected Space is Connected:

$T$ is connected
$\Box$

Uniqueness
We will show that $\R^n \setminus \map {B_\epsilon} {\bsx_0}$ is connected.
Then, any component $C$ other than the one containing $\R^n \setminus \map {B_\epsilon} {\bsx_0}$ satisfies:

$C \subseteq \map {B_\epsilon} {\bsx_0}$
and is thus bounded by definition.

Let $\bsx, \bsx' \in \R^n \setminus \map {B_\epsilon} {\bsx_0}$ be arbitrary.
Define:

$\bsy = \bsx_0 + \dfrac \epsilon {\norm {\bsx - \bsx_0}} \paren {\bsx - \bsx_0}$
$\bsy' = \bsx_0 + \dfrac \epsilon {\norm {\bsx' - bsx_0}} \paren {\bsx' - \bsx_0}$
We have:














\(\ds \norm {\bsy - \bsx_0}\)

\(=\)







\(\ds \norm {\dfrac \epsilon {\norm {\bsx - \bsx_0} } \paren {\bsx - \bsx_0} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac \epsilon {\norm {\bsx - \bsx_0} } \norm {\bsx - \bsx_0}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \epsilon\)




















\(\ds \norm {\bsy' - \bsx_0}\)

\(=\)







\(\ds \norm {\dfrac \epsilon {\norm {\bsx' - \bsx_0} } \paren {\bsx' - \bsx_0} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac \epsilon {\norm {\bsx' - \bsx_0} } \norm {\bsx' - \bsx_0}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \epsilon\)









Therefore, both $\bsy$ and $\bsy'$ lie on the $n - 1$-sphere with center $\bsx_0$ and radius $\epsilon$.
By Sphere is Connected and Connected Set in Subspace:

$\bsy$ and $\bsy'$ are connected in $\R^n \setminus \map {B_\epsilon} {\bsx_0}$
By Connectedness of Points is Equivalence Relation, it remains to show that:

$\bsx$ is connected to $\bsy$
$\bsx'$ is connected to $\bsy'$

Define $f, g : \closedint 0 1 \to \R^n \setminus \map {B_\epsilon} \bsx_0$ as:

$\map f t = \bsx_0 + \paren {1 + t \paren {\dfrac \epsilon {\norm {\bsx - \bsx_0}} - 1}} \paren {\bsx - \bsx_0}$
$\map g t = \bsx_0 + \paren {1 + t \paren {\dfrac \epsilon {\norm {\bsx' - \bsx_0}} - 1}} \paren {\bsx' - \bsx_0}$
Both $f$ and $g$ are continuous by Combination Theorem for Continuous Mappings on Metric Space.
We also have that:














\(\ds \norm {\map f t - \bsx_0}\)

\(=\)







\(\ds \norm {\paren {1 + t \paren {\dfrac \epsilon {\norm {\bsx - \bsx_0} } - 1} } \paren {\bsx - \bsx_0} }\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + t \paren {\dfrac \epsilon {\norm {\bsx - \bsx_0} } - 1} } \norm {\bsx - \bsx_0}\)




















\(\ds \)

\(=\)







\(\ds \norm {\bsx - \bsx_0} + t \paren {\epsilon - \norm{\bsx - \bsx_0} }\)




















\(\ds \)

\(=\)







\(\ds t \epsilon + \paren {1 - t} \norm {\bsx - \bsx_0}\)




















\(\ds \)

\(\ge\)







\(\ds t \epsilon + \paren {1 - t} \epsilon\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









In exactly the same manner:

$\norm {\map g t - \bsx_0} \ge \epsilon$
This shows that, indeed:

$f \closedint 0 1 \subseteq \R^n \setminus \map {B_\epsilon} {\bsx_0}$
$g \closedint 0 1 \subseteq \R^n \setminus \map {B_\epsilon} {\bsx_0}$
Additionally:

$\map f 0 = \bsx$
$\map f 1 = \bsy$
$\map g 0 = \bsx'$
$\map g 1 = \bsy'$
Therefore:

$\bsx$ is path-connected to $\bsy$ in $\R^n \setminus \map {B_\epsilon} {\bsx_0}$
$\bsx'$ is path-connected to $\bsy'$ in $\R^n \setminus \map {B_\epsilon} {\bsx_0}$
By:

Points are Path-Connected iff Contained in Path-Connected Set
Path-Connected Space is Connected
Definition of Connected Points (Topology)
we have that:

$\bsx$ is connected to $\bsy$
$\bsx'$ is connected to $\bsy'$
completing our proof by the remarks above.
$\blacksquare$





