# 

Source: https://proofwiki.org/wiki/Sequential_Continuity_is_Equivalent_to_Continuity_in_the_Reals


This article is complete as far as it goes, but it could do with expansion.In particular: It is worth adding a page defining "sequential continuity", or if it already exists, using a link to it, or if it exists in a more general topological context, using that, and whatever theorems may be proved in that general topological context and applying it to the real numbers.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $A \subseteq \R$ be a subset of the real numbers.
Let $c \in A$.
Let $f : A \to \R$ be a real function.

Then $f$ is continuous at $c$ if and only if:

for each sequence $\sequence {x_n}$ in $A$ that converges to $c$, the sequence $\sequence {\map f {x_n} }$ converges to $\map f c$.


Corollary
Let $I$ be a real interval. 
Let $x \in I$. 
Let $f : I \to \R$ be a real function.

Then $f$ is continuous at $x$ if and only if:

for all monotone sequences $\sequence {x_n}_{n \mathop \in \N}$ converging to $x$ we have:
$\map f {x_n} \to \map f x$


Proof
Sufficient Condition
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
$\Box$


Necessary Condition
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


Sources
2011: Robert G. Bartle and Donald R. Sherbert: Introduction to Real Analysis (4th ed.): $\S 5.1$: Theorem $2$




