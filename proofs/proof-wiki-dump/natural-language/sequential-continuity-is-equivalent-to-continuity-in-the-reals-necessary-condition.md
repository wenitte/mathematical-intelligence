# 

Source: https://proofwiki.org/wiki/Sequential_Continuity_is_Equivalent_to_Continuity_in_the_Reals/Necessary_Condition

Theorem
Let $A \subseteq \R$ be a subset of the real numbers.
Let $c \in A$.
Let $f : A \to \R$ be a real function.

Then if $f$ is continuous at $c$:

for each sequence $\sequence {x_n}$ in $A$ that converges to $c$, the sequence $\sequence {\map f {x_n} }$ converges to $\map f c$.


Proof
Let $c \in \R$. 
Let $\sequence {x_n}$ be a sequence in $A$ that converges to $c$.
Let $\varepsilon \in \R_{> 0}$. 
Since $f$ is continuous at $c$, there exists $\delta > 0$ such that: 

for all $x \in A$ with $\size {x - c} < \delta$, we have $\size {\map f x - \map f c} < \varepsilon$.
Additionally, since $\sequence {x_n}$ converges to $c$, there exists $N \in \N$ such that: 

for all $n > N$ we have $\size {x_n - c} < \delta$.
Therefore, since $x_n \in A$ for all $n \in \N$: 

for all $n > N$, we have $\size {\map f {x_n} - \map f c} < \varepsilon$.
Since $\varepsilon$ was arbitrary, we have: 

$\sequence {\map f {x_n} }$ converges to $\map f c$.
$\blacksquare$





