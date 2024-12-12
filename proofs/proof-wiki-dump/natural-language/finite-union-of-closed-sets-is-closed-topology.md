# 

Source: https://proofwiki.org/wiki/Finite_Union_of_Closed_Sets_is_Closed/Topology

Theorem
Let $T = \struct {S, \tau}$ be a topological space.

Then the union of finitely many closed sets of $T$ is itself closed.


Proof
Let $\ds \bigcup_{i \mathop = 1}^n V_i$ be the union of a finite number of closed sets of $T$.
Then from De Morgan's laws:

$\ds S \setminus \bigcup_{i \mathop = 1}^n V_i = \bigcap_{i \mathop = 1}^n \paren {S \setminus V_i}$
By definition of closed set, each of the $S \setminus V_i$ is by definition open in $T$.
We have that $\ds \bigcap_{i \mathop = 1}^n \paren {S \setminus V_i}$ is the intersection of a finite number of open sets of $T$.
Therefore, by definition of a topology, $\ds \bigcap_{i \mathop = 1}^n \paren {S \setminus V_i} = S \setminus \bigcup_{i \mathop = 1}^n V_i$ is likewise open in $T$.
Then by definition of closed set, $\ds \bigcup_{i \mathop = 1}^n V_i$ is closed in $T$.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous) ... (next): $2.24 d$
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Chapter $\text {I}$: Topological Spaces: $1$. Open Sets and Closed Sets: Theorem $1$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 2$: Topological Spaces: Exercise $4$




