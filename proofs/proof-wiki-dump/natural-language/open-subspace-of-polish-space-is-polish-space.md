# 

Source: https://proofwiki.org/wiki/Open_Subspace_of_Polish_Space_is_Polish_Space



Theorem
Let $\struct {X, \tau}$ be a Polish space.
Let $d$ be a metric on $X$ that induces $\tau$ and is such that $\struct {X, d}$ is a complete metric space.
Let $U \subseteq X$ be open.
Let $\tau_U$ be the subspace topology on $U$ induced by $\tau$.

Then $\struct {U, \tau_U}$ is a Polish space.


Proof
From Subspace of Separable Metric Space is Separable, $\struct {U, \tau_U}$ is separable.
Next, we have that $X \setminus U$ is closed in $\struct {X, \tau}$. 
Define $f : U \to \hointr 0 \infty$ by:

$\map f x = \map d {x, X \setminus U}$
for each $x \in U$.
From Point at Distance Zero from Closed Set is Element, we have $\map f x > 0$ for each $x \in U$.
We can therefore define $\widetilde d : U \times U \to \hointr 0 \infty$ by:

$\ds \map {\widetilde d} {x, y} = \map d {x, y} + \size {\frac 1 {\map f x} - \frac 1 {\map f y} }$
for each $x, y \in U$.
We need to show that $\widetilde d$ is a metric, is complete and induces $\tau_U$.


Proof of Metric Space Axiom $(\text M 1)$
Let $x \in U$.
From Metric Space Axiom $(\text M 1)$ for $d$ we have $\map d {x, x} = 0$.
It is then immediate that $\map {\widetilde d} {x, x} = 0$. 
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
Let $x, y, z \in U$.
We have from Metric Space Axiom $(\text M 2)$: Triangle Inequality for $d$:

$\map d {x, z} \le \map d {x, y} + \map d {y, z}$
and:














\(\ds \size {\frac 1 {\map f x} - \frac 1 {\map f z} }\)

\(=\)







\(\ds \size {\frac 1 {\map f x} - \frac 1 {\map f y} + \frac 1 {\map f y} - \frac 1 {\map f z} }\)




















\(\ds \)

\(\le\)







\(\ds \size {\frac 1 {\map f x} - \frac 1 {\map f y} } + \size {\frac 1 {\map f y} - \frac 1 {\map f z} }\)





Triangle Inequality for Real Numbers



Hence, we have:

$\map {\widetilde d} {x, z} \le \map {\widetilde d} {x, y} + \map {\widetilde d} {y, z}$
$\Box$


Proof of Metric Space Axiom $(\text M 3)$
Let $x, y \in U$.
Then we have from Metric Space Axiom $(\text M 3)$ for $d$:

$\map d {x, y} = \map d {y, x}$
and:

$\ds \size {\frac 1 {\map f x} - \frac 1 {\map f y} } = \size {\frac 1 {\map f y} - \frac 1 {\map f x} }$
Hence $\map {\widetilde d} {x, y} = \map {\widetilde d} {y, x}$.
$\Box$


Proof of Metric Space Axiom $(\text M 4)$
Let $x, y \in U$ have $x \ne y$.
Then $\map d {x, y} > 0$ from Metric Space Axiom $(\text M 4)$ for $d$. 
We have:

$\ds \size {\frac 1 {\map f y} - \frac 1 {\map f x} } \ge 0$
Hence we have $\map {\widetilde d} {x, y} > 0$. 
$\Box$


$\struct {U, \widetilde d}$ is complete
Let $\sequence {x_n}_{n \in \N}$ be a Cauchy sequence in $\struct {U, \widetilde d}$.
Let $\epsilon > 0$.
Then there exists $N \in \N$ such that for $n, m \ge N$ we have:

$\ds \map {\widetilde d} {x_n, x_m} = \map d {x_n, x_m} + \size {\frac 1 {\map f {x_m} } - \frac 1 {\map f {x_n} } } < \epsilon$
for all $n, m \ge N$. 
That is, $\map d {x_n, x_m} < \epsilon$ for $n, m \ge N$.
Hence $\sequence {x_n}_{n \in \N}$ is Cauchy in $\struct {X, d}$.
Since $\struct {X, d}$ is complete, there exists $x \in X$ such that $\sequence {x_n}_{n \in \N}$ converges to $x$.
Aiming for a contradiction, suppose that $x \in X \setminus U$.
Then from Point at Distance Zero from Closed Set is Element we have $\map f x = 0$. 
From Distance from Point to Subset is Continuous Function and Restriction of Continuous Mapping is Continuous, $f$ is continuous as a mapping $\struct {X, d} \to \hointr 0 \infty$.
Hence from Continuous Mapping is Sequentially Continuous, $f$ is sequentially continuous.
Since $x_m \to x$ in $\struct {X, d}$, we have $\map f {x_m} \to \map f x = 0$. 
We therefore have:

$\ds \size {\frac 1 {\map f {x_m} } - \frac 1 {\map f {x_n} } } \to \infty$
for fixed $n$ and $m \to \infty$.
However by assumption there exists $N \in \N$ such that:

$\ds \size {\frac 1 {\map f {x_m} } - \frac 1 {\map f {x_n} } } < 1$
for $n, m \ge N$. 
This is a contradiction.
Hence $x \in U$ and $\map f x > 0$.
Hence from sequential continuity, we have:

$\ds \size {\frac 1 {\map f {x_n} } - \frac 1 {\map f x} } \to 0$ as $n \to \infty$.
Also since $x_n \to x$ in $\struct {X, d}$, we have $\map d {x_n, x} \to 0$ as $n \to \infty$.
Hence $\map {\widetilde d} {x_n, x} \to 0$ as $n \to \infty$, giving that $x_n \to x$ in $\struct {U, \widetilde d}$. 
So every Cauchy sequence in $\struct {U, \widetilde d}$ converges. 
Hence $\struct {U, \widetilde d}$ is a complete metric space.
$\Box$


$\widetilde d$ induces $\tau_U$
From Convergent Sequences Characterize Metrizable Topology, it is enough to establish that the convergent sequences in $\struct {U, \tau_U}$ are precisely the convergent sequences in $\struct {U, \widetilde d}$.
Let $\sequence {x_n}_{n \in \N}$ be a sequence in $\struct {U, \tau_U}$ converging to $x \in U$.
Again since $f$ is sequentially continuous $\struct {X, d} \to \hointr 0 \infty$, we have that $\map f {x_n} \to \map f x$ as $n \to \infty$.
Hence:

$\ds \size {\frac 1 {\map f {x_n} } - \frac 1 {\map f x} } \to 0$ as $n \to \infty$.
We also have $\map d {x_n, x} \to 0$ as $n \to \infty$.
So $\map {\widetilde d} {x_n, x} \to 0$ as $n \to \infty$.
Hence $x_n \to x$ in $\struct {U, \widetilde d}$.
Conversely, let $\sequence {x_n}_{n \in \N}$ be a convergent sequence in $\struct {U, \widetilde d}$.
Then for each $\epsilon > 0$, there exists $N \in \N$ such that:

$\ds \map d {x_n, x} + \size {\frac 1 {\map f x} - \frac 1 {\map f {x_n} } } < \epsilon$ for each $n \ge N$.
Hence $\map d {x_n, x} < \epsilon$ for each $n \ge N$.
Since $\epsilon$ was arbitrary, we have that $x_n \to x$ in $\struct {U, \tau_U}$. 
Hence from Convergent Sequences Characterize Metrizable Topology, we have that $\widetilde d$ induces $\tau_U$.
$\blacksquare$





