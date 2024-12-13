# 

Source: https://proofwiki.org/wiki/Sequential_Continuity_is_Equivalent_to_Continuity_in_the_Reals/Sufficient_Condition

Theorem
Let $A \subseteq \R$ be a subset of the real numbers.
Let $c \in A$.
Let $f: A \to \R$ be a real function.
Then if $f$ is continuous at $c$:

for each sequence $\sequence {x_n}$ in $A$ that converges to $c$, the sequence $\sequence {\map f {x_n} }$ converges to $\map f c$.


Proof
It suffices to show that if $f$ is discontinuous at $c$:

there exists a real sequence $\sequence {x_n}$ in $A$ such that $\sequence {x_n}$ converges to $c$ but $\sequence {\map f {x_n} }$ does not converge to $\map f c$.
As $f$ is discontinuous, there exists some $\varepsilon > 0$ such that for all $\delta > 0$:

there exists $x \in A$ with $\size {x - c} < \delta$ such that $\size {\map f x - \map f c} \ge \varepsilon$.
Using this property, we can construct a sequence $\sequence {x_n}$ as follows:

for each $n \in \N$, pick $x_n \in A$ such that $\size {x_n - c} \le \dfrac 1 n$ and $\size {\map f {x_n} - \map f c} \ge \varepsilon$
Note that since: 

$\ds \lim_{n \mathop \to \infty} \frac 1 n = 0$
We have by the Squeeze Theorem for Real Sequences: 

$\ds \lim_{n \mathop \to \infty} \size {x_n - c} = 0$
so $\sequence {x_n}$ converges to $c$.
However $\sequence {\map f {x_n} }$ cannot converge to $\map f c$ since:

$\size {\map f {x_n} - \map f c} \ge \varepsilon > 0$
for all $n \in \N$.
Therefore, our $\sequence {x_n}$ satisfies our original demand.
$\blacksquare$





