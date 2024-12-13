# 

Source: https://proofwiki.org/wiki/Set_Closure_is_Smallest_Closed_Set/Normed_Vector_Space



Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $S$ be a subset of $X$:

$S \subseteq X$
Let $S^-$ be the closure of $S$.

Then $S^-$ is the smallest closed set which contains $S$.


Proof
Let $F$ be a closed set in $X$.
Suppose $S \subseteq F$.


$S^-$ is contained in $F$
Let $L$ be a limit point of $S$.
Then there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $S \setminus \set L$ which converges to $L$.
In other words:

$\forall n \in \N : x_n \in S \setminus \set L$.
Furthermore:

$S \setminus \set L \subseteq S \subseteq F$
Since $F$ is closed, $L \in F$.
So all limit points of $S$ belong to $F$.
Hence, $S^- \subseteq F$.
$\Box$


$S^-$ is closed
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence in $S^-$.
Let $\sequence {x_n}_{n \mathop \in \N}$ converge to $L$:

$\forall \epsilon \in \R_{>0}: \exists N \in \N: \forall n \in \N: n > N \implies \norm {x_n - L} < \epsilon$
We can have either $L \in S$ or $L \notin S$.
Suppose $L \in S$.

By definition of closure, $L \in S^-$.
Suppose $L \notin S$.
Define a new sequence $x_n'$ using $x_n$ as follows:

$(1): \quad$ if $x_n \in S$, then $x_n' := x_n$;
$(2): \quad$ if $x_n \notin S$, then $x_n$ is a limit point of $S$.
Then there is open ball $\ds \map {B_{\frac 1 n}} {x_n}$ which has an element of $S$.
Define $x_n'$ such that $x_n' \in S$ and $x_n' \in \map {B_{\frac 1 n}} {x_n}$
Suppose $x_n \in S$.
Then:

$\norm {x_n' - L} = \norm {x_n - L}$
Suppose $x_n \notin S$.
Then:














\(\ds \norm {x_n' - L}\)

\(=\)







\(\ds \norm {x_n' - x_n + x_n - L}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_n' - x_n} + \norm {x_n - L}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds \frac 1 n + \norm {x_n - L}\)




















\(\ds \)

\(<\)







\(\ds \frac 1 n + \epsilon\)









Thus, $\sequence {x_n'}_{n \mathop \in \N}$ is a sequence in $S \setminus \set L$ which converges to $L$.
So $L$ is a limit point of $S$:

$L \in S^-$.
By definition, $S^-$ is closed.
$\Box$


$S^-$ is the smallest closed set containing $S$
Aiming for a contradiction, suppose there exists a closed set $Q$ smaller than $S^-$ which contains $S$.
$S^-$ differs from $S$ only by limit points of $S$.
If $Q$ is smaller than $S^-$, it has to contain fewer limit points of $S$ than $S^-$.
Hence, $Q$ would not contain all its limit points.
By definition, $Q$ would not be closed.
This is a contradiction.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




