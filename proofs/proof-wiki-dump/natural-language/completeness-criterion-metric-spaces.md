# 

Source: https://proofwiki.org/wiki/Completeness_Criterion_(Metric_Spaces)



Theorem
Let $M = \struct {S, d}$ be a metric space.
Let $A \subseteq S$ be a dense subset.
Suppose that every Cauchy sequence in $A$ converges in $M$.

Then $M$ is complete.


Proof 1
Let $\sequence {x_n}_{n \mathop \in \N}$ be a Cauchy sequence in $S$.
For each $n$ pick a Cauchy sequence $\sequence {y_{n, m} }_{m \mathop \in \N}$ in $A$ converging to $x_n$ like so:


Let $N \in \N$ be such that $\map d {x_{n_1}, x_{n_2} } < \epsilon / 3$ for all $n_1, n_2 > N$.
Let $M \in \N$ be such that $\map d {y_{n_i, m}, x_{n_i} } < \epsilon / 3$ for all $m > M$ and all $n_1, n_2 > N$. 

Let $m > M$.
Let $n_1, n_2 > N$.
We have:














\(\ds \map d {y_{n_1, m}, y_{n_2, m} }\)

\(\le\)







\(\ds \map d {y_{n_1, m}, x_{n_1} } + \map d {x_{n_1}, x_{n_2} } + \map d {x_{n_2}, y_{n_2, m} }\)





two applications of the Triangle Inequality














\(\ds \)

\(<\)







\(\ds \epsilon\)









Therefore $\sequence {y_{m, n} }_{n \mathop \in \N}$ is Cauchy in $A$ for $m > M$.
So $\sequence {y_{m, n} }_{n \mathop \in \N}$ converges to some limit $y_n \in S$.


This needs considerable tedious hard slog to complete it.In particular: Proof to completeTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 2
Let $\left\langle{x_n}\right\rangle$ be a Cauchy sequence in $M$.

Since $A$ is dense, we can invoke the Axiom of Countable Choice to choose for each $n$ some $y_n \in A$ which is within $1 / n$ of $x_n$.

We will show that $\left\langle{y_n}\right\rangle$ is Cauchy.

Let $\epsilon > 0$.
Since $\left\langle{x_n}\right\rangle$ is Cauchy, there exists some $N'$ such that:

$\forall n, m \ge N': d \left({x_n, x_m}\right) < \frac 1 3 \epsilon$
Let $N \in \N$ be greater than $N'$ and $3 \epsilon^{-1}$.
Note that $n, m \ge N$ implies that both:

$(1): \quad n, m \ge N'$
$(2): \quad \dfrac 1 n, \dfrac 1 m \le \dfrac 1 N < \dfrac 1 3 \epsilon$
Thus for $n, m \ge N$, by the Triangle Inequality and the above:














\(\ds d \left({y_n, y_m}\right)\)

\(\le\)







\(\ds d \left({y_n, x_n}\right) + d \left({x_n, x_m}\right) + d \left({x_m, y_m}\right)\)




















\(\ds \)

\(<\)







\(\ds \frac 1 n + \frac 1 3 \epsilon + \frac 1 m\)




















\(\ds \)

\(<\)







\(\ds \frac 1 3 \epsilon + \frac 1 3 \epsilon + \frac 1 3 \epsilon\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)










Hence $\left\langle{y_n}\right\rangle$ is a Cauchy sequence in $A$.
By assumption, it converges to some limit $y \in S$.

Now, we verify that $\left\langle{x_n}\right\rangle$ converges to $y$ as well.

Let $\epsilon > 0$.
Since $\left\langle{y_n}\right\rangle$ converges, there exists some $N'$ such that:

$\forall n \ge N': d \left({y_n, y}\right) < \dfrac 1 2 \epsilon$
Let $N \in \N$ be greater than $N'$ and $2 \epsilon^{-1}$.
Note that $n \ge N$ implies that both:

$(1): \quad n \ge N'$
$(2): \quad \dfrac 1 n \le \dfrac 1 N < \dfrac 1 2 \epsilon$
Thus, for $n \ge N$, we have by the Triangle Inequality and above that:














\(\ds d \left({x_n, y}\right)\)

\(\le\)







\(\ds d \left({x_n, y_n}\right) + d \left({y_n, y}\right)\)




















\(\ds \)

\(<\)







\(\ds \frac 1 n + \frac 1 2 \epsilon\)




















\(\ds \)

\(<\)







\(\ds \frac 1 2 \epsilon + \frac 1 2 \epsilon\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Hence $\left\langle{x_n}\right\rangle$ converges to $y$.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





