# 

Source: https://proofwiki.org/wiki/Equivalence_of_Local_Uniform_Convergence_and_Compact_Convergence



Theorem
Let $U \subseteq \C$ be an open set of the complex plane.
Let $f_n: U \to \C$ be a sequence of functions which converges pointwise to $f: U \to \C$.

Then $f_n$ converges to $f$ uniformly on all compact subsets of $U$ if and only if $f_n$ converges locally uniformly on $U$.


Proof
Sufficient Condition
Suppose that $f_n$ converges to $f$ uniformly on all compact subsets of $U$.
Let $z \in U$.
Since $U$ is open, there is an open ball $\map {B_\epsilon} z$, around $z$, of radius $\epsilon$, with the closure of the ball, $\overline{\map {B_\epsilon} z}$, contained in $U$.
Since $\overline {\map {B_\epsilon} z}$ is closed and bounded, it is compact, by the Heine-Borel Theorem. 
We then have by assumption that $f_n$ converges uniformly on $\overline {\map {B_\epsilon} z}$.
Thus $f_n$ converges locally uniformly on $U$.
$\Box$


Necessary Condition
Now suppose that $f_n$ converges to $f$ locally uniformly.
That is, for every $z \in U$, there is an $r$ so that $\map {B_r} z \subset U$ and $f_n$ converges uniformly on $\map {B_r} z$.
Let $K \subset U$ be an arbitrary compact subset.
Let $\set {\map {B_{r_z} } z}_{z \mathop \in K}$ be an open cover of $K$ by open balls, one centered at each $z \in K$, such that $f_n$ converges uniformly on each ball.
Since $K$ is compact, there is a finite subset $\set {\map {B_{r_i} } {z_i} }_{i \mathop = 1}^n$
which covers $K$.
Let $\epsilon > 0$, and $1 \le i \le n$. 
Then there is an $N_i$ large enough so that:

$\ds \sup_{z \mathop \in \map {B_{r_i} } {z_i} } \size {\map {f_n} z - \map f z} < \epsilon$
for all $n > N_i$, since the convergence is uniform.
Let $N = \ds \max_{1 \mathop \le i \mathop \le n} \set {N_i}$.
Let $B = \ds \bigcup_{i \mathop = 1}^n \map {B_{r_i} } {z_i}$.
Then:

$\ds \sup_{z \mathop \in B} \size {\map {f_n} z - \map f z} < \epsilon$
for all $n > N$.
Thus $f_n$ converges uniformly on $B$, and so also on $K$.
$\blacksquare$





