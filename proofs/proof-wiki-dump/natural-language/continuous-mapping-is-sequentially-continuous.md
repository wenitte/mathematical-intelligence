# 

Source: https://proofwiki.org/wiki/Continuous_Mapping_is_Sequentially_Continuous

Theorem
Let $X$ and $Y$ be topological spaces.
Let $x \in X$.
Let $f: X \to Y$ be a mapping that is continuous at $x$.

Then $f$ is sequentially continuous at $x$.


Corollary
Let $f$ be continuous (everywhere) on $X$.
Then $f$ is sequentially continuous on $X$.


Proof
Let $\sequence {x_n}_{n \mathop \ge 1}$ be a sequence in $X$ converging to $x$.
Let $V$ be a neighborhood of $\map f x$ in $Y$.
We are required to show that there exists $N \in \N$ such that $\map f {x_n} \in V$ for all $n \ge N$.
By continuity of $f$, choose a neighborhood $U$ of $x$ in $X$ such that $\map f U \subseteq V$.
Since $\sequence {x_n}_{n \mathop \ge 1}$ converges, there exists $N \in \N$ such that $x_n \in U$ for all $n \ge N$.
Therefore we must have that $\map f {x_n} \in \map f U \subseteq V$ for all $n \ge N$, as required.
$\blacksquare$





