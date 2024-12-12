# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Metric_Space_is_Bounded



Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\sequence {x_n}$ be a sequence in $M$ which is convergent, and so $x_n \to l$ as $n \to \infty$.

Then $\sequence {x_n}$ is bounded.


Convergent Sequence in Normed Division Ring is Bounded
Let $\struct {R, \norm {\,\cdot\,}}$ be a normed division ring.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $\sequence {x_n}$ be convergent in the norm $\norm {\,\cdot\,}$ to the following limit:

$\ds \lim_{n \mathop \to \infty} x_n = l$

Then $\sequence {x_n}$ is bounded.


Convergent Real Sequence is Bounded
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $l \in A$ such that $\ds \lim_{n \mathop \to \infty} x_n = l$.

Then $\sequence {x_n}$ is bounded.


Proof
Let $M = \struct {A, d}$ be a metric space.
Let $\sequence {x_n}$ be a sequence in $M$ which is convergent, and so $x_n \to l$ as $n \to \infty$.
From the definition, in order to prove boundedness, all we need to do is find $K \in \R$ such that $\forall n \in \N: \map d {x_n, l} \le K$.
Since $\sequence {x_n}$ converges, it is true that:

$\forall \epsilon > 0: \exists N: n > N \implies \map d {x_n, l} < \epsilon$
In particular, this is true when $\epsilon = 1$, for example.
That is:

$\exists N_1: \forall n > N_1: \map d {x_n, l} < 1$
So now we set:

$K = \max \set {\map d {x_1, l}, \map d {x_2, l}, \ldots, \map d {x_{N_1}, l}, 1}$
The result follows.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Check whether this citation belongs with the real, complex or metric space version of this.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1953: Walter Rudin: Principles of Mathematical Analysis: $3.2 \, \text{c}$




