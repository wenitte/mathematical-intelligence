# 

Source: https://proofwiki.org/wiki/Complete_and_Totally_Bounded_Metric_Space_is_Sequentially_Compact/Proof_3

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $M$ be complete and totally bounded.

Then $M$ is sequentially compact.


Proof
Let $M$ be both complete and totally bounded.
Let $\sequence {a_k}$ be any infinite sequence in $A$.
Let $\epsilon \in \R_{>0}$.
Let $x_1, \ldots, x_n \in X$ be a finite set of points such that:

$\ds A = \bigcup_{i \mathop = 1}^n \map {B_\epsilon} {x_i}$
where $\map {B_\epsilon} {x_i}$ represents the open $\epsilon$-ball of $x_i$.
This is known to exist as $M$ is totally bounded.
Then for every $k \in \N$, there is some $j_k \in \set {0, \dots, n}$ such that $\map d {a_k, x_{j_k} } \le \epsilon$.
For some $j \in \set {0, \dots, n}$, we must have $j_k = j$ for infinitely many $k$, and it follows by setting $x := x_{j_k}$.
Setting $x := x_{j_k}$, we see that:

$(1): \quad$ There is some $x \in X$ such that $\map d {a_k, x} \le \epsilon$ for infinitely many $k$.

Now let $\sequence {a_k}$ be any infinite sequence in $A$.
By $(1)$, there is some $x_1 \in X$ such that $\map d {a_k, x_1} \le \dfrac 1 2$ for infinitely many $k$. 


The dependence on a certain axiom has to be clarified.In particular: use only axiom of countable choice, not axiom of dependent choiceKeep this in case someone out there can figure out a way to fix this without making it like Proof 1To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{AxiomReview}} from the code.
Now we can apply $(1)$ to the subsequence of $\sequence {a_k}$ which consisting of those elements for which $\map d {a_k, x_1} \le \dfrac 1 2$.
Thus we can find $x_2 \in A$ such that infinitely many $k$ satisfy both $\map d {a_k, x_2} \le \dfrac 1 4$ and $\map d {a_k, x_1} \le \dfrac 1 2$.
Now we proceed inductively, to obtain a sequence $\sequence {x_m}$ with the property that there exist infinitely many $k$ such that, for $1 \le j \le m$:

$(2) \quad \map d {a_k, x_j} \le 2^{-j}$
Now define a subsequence $\sequence {a_{k_m} }$ inductively by letting $k_0$ be arbitrary, and choosing $k_{m + 1}$ minimal such that $k_{m + 1} > k_m$ and such that $(2)$ holds for $k = k_m$ and all $1 \le j \le m$. 
Let $\epsilon > 0$, and choose $n$ sufficiently large that $\paren {\dfrac 1 2}^{n - 1} < \epsilon$.
Then:

$\map d {a_{k_r}, a_{k_s} } \le \map d {a_{k_r}, x_n} + \map d {a_{k_s}, x_n} \le 2 \cdot 2^{-n} < \epsilon$
whenever $r, s \ge n$.

So this subsequence is a Cauchy sequence and hence, because $M$ is complete by assumption, it is convergent.
Thus we see that $\sequence {a_k}$ has a convergent subsequence.
Hence, by definition, $M$ is sequentially compact.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





