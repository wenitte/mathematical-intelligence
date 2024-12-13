# 

Source: https://proofwiki.org/wiki/Jensen%27s_Inequality_(Real_Analysis)

This proof is about Jensen's Inequality in the context of Real Analysis. For other uses, see Jensen's Inequality.



Theorem
Let $I$ be a real interval.
Let $\phi: I \to \R$ be a convex function.
Let $x_1, x_2, \ldots, x_n \in I$.
Let $\lambda_1, \lambda_2, \ldots, \lambda_n \ge 0$ be real numbers, at least one of which is non-zero.

Then:

$\ds \map \phi {\frac {\sum_{k \mathop = 1}^n \lambda_k x_k} {\sum_{k \mathop = 1}^n \lambda_k} } \le \frac {\sum_{k \mathop = 1}^n \lambda_k \map \phi {x_k} } {\sum_{k \mathop = 1}^n \lambda_k}$

For $\phi$ strictly convex, equality holds if and only if $x_1 = x_2 = \cdots = x_n$.


Corollary
Let $I$ be a real interval.
Let $\phi: I \to \R$ be a concave function.
Let $x_1, x_2, \ldots, x_n \in I$.
Let $\lambda_1, \lambda_2, \ldots, \lambda_n \ge 0$ be real numbers, at least one of which is non-zero.

Then:

$\ds \map \phi {\frac {\sum_{k \mathop = 1}^n \lambda_k x_k} {\sum_{k \mathop = 1}^n \lambda_k} } \ge \frac {\sum_{k \mathop = 1}^n \lambda_k \map \phi {x_k} } {\sum_{k \mathop = 1}^n \lambda_k}$

For $\phi$ strictly concave, equality holds if and only if $x_1 = x_2 = \cdots = x_n$.


Proof
The proof proceeds by mathematical induction on $n$.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\ds \map \phi {\frac {\sum_{k \mathop = 1}^n \lambda_k x_k} {\sum_{k \mathop = 1}^n \lambda_k} } \le \frac {\sum_{k \mathop = 1}^n \lambda_k \map \phi {x_k} } {\sum_{k \mathop = 1}^n \lambda_k}$

$\map P 1$ is true, as this just says:

$\ds \map \phi {\frac {\lambda_1 x_1} {\lambda_1} } \le \frac {\lambda_1 \map \phi {x_1} } {\lambda_1}$













\(\ds \map \phi {\frac {\lambda_1 x_1} {\lambda_1} }\)

\(=\)







\(\ds \map \phi {x_1}\)




















\(\ds \)

\(=\)







\(\ds \frac {\lambda_1 \map \phi {x_1} } {\lambda_1}\)









trivially.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P r$ is true, where $r \ge 2$, then it logically follows that $\map P {r + 1}$ is true.

So this is our induction hypothesis:

$\ds \map \phi {\frac {\sum_{k \mathop = 1}^r \lambda_k x_k} {\sum_{k \mathop = 1}^r \lambda_k} } \le \frac {\sum_{k \mathop = 1}^r \lambda_k \map \phi {x_k} } {\sum_{k \mathop = 1}^r \lambda_k}$
where $\lambda_1, \lambda_2, \ldots, \lambda_r \ge 0$ are real numbers, at least one of which is non-zero.

Then we need to show:

$\ds \map \phi {\frac {\sum_{k \mathop = 1}^{r + 1} \lambda_k x_k} {\sum_{k \mathop = 1}^{r + 1} \lambda_k} } \le \frac {\sum_{k \mathop = 1}^{r + 1} \lambda_k \map \phi {x_k} } {\sum_{k \mathop = 1}^{r + 1} \lambda_k}$
where $\lambda_1, \lambda_2, \ldots, \lambda_{r + 1} \ge 0$ are real numbers, at least one of which is non-zero.


Induction Step
This is our induction step:

Without loss of generality, assume that $\lambda_r$ and $\lambda_{r + 1}$ are non-zero.
Otherwise, the statement reduces to the induction hypothesis.
Define:

$y := \dfrac {\lambda_r x_r + \lambda_{r + 1} x_{r + 1} } {\lambda_r + \lambda_{r + 1} }$
Then:














\(\ds \map \phi {\frac {\sum_{k \mathop = 1}^{r + 1} \lambda_k x_k} {\sum_{k \mathop = 1}^{r + 1} \lambda_k} }\)

\(=\)







\(\ds \map \phi {\frac {\sum_{k \mathop = 1}^{r - 1} \lambda_k x_k + \paren {\lambda_r + \lambda_{r + 1} } y} {\sum_{k \mathop = 1}^{r - 1} \lambda_k + \paren {\lambda_r + \lambda_{r + 1} } } }\)




















\(\ds \)

\(\le\)







\(\ds \frac {\sum_{k \mathop = 1}^{r - 1} \lambda_k \map \phi {x_k} + \paren {\lambda_r + \lambda_{r + 1} } \map \phi y} {\sum_{k \mathop = 1}^{r - 1} \lambda_k + \paren {\lambda_r + \lambda_{r + 1} } }\)





by the induction hypothesis














\(\ds \)

\(\le\)







\(\ds \frac {\sum_{k \mathop = 1}^{r + 1} \lambda_k \map \phi {x_k} } {\sum_{k \mathop = 1}^{r + 1} \lambda_k}\)





Definition of Convex Real Function




Note that in the case that $\phi$ is strictly convex, equality holds if and only if $x_1 = x_2 = \cdots = x_r = x_{r + 1}$.

So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \N_{>0}: \map \phi {\frac {\sum_{k \mathop = 1}^n \lambda_k x_k} {\sum_{k \mathop = 1}^n \lambda_k} } \le \frac {\sum_{k \mathop = 1}^n \lambda_k \map \phi {x_k} } {\sum_{k \mathop = 1}^n \lambda_k}$
$\blacksquare$


Source of Name
This entry was named for Johan Ludwig William Valdemar Jensen.





