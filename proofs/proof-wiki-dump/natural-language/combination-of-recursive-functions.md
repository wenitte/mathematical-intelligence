# 

Source: https://proofwiki.org/wiki/Combination_of_Recursive_Functions


This page has been identified as a candidate for refactoring of basic complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $f: \N^k \to \N$ and $g: \N^k \to \N$ be recursive functions (not necessarily total), where $k \ge 1$.
Let $\RR$ be a $k$-ary relation such that:

if $\map \RR {n_1, n_2, \ldots, n_k}$ holds, then $\map f {n_1, n_2, \ldots, n_k}$ is defined
if $\map \RR {n_1, n_2, \ldots, n_k}$ does not hold, then $\map g {n_1, n_2, \ldots, n_k}$ is defined.
Let $h: \N^k \to \N$ be the function defined as:

$\map h {n_1, n_2, \ldots, n_k} = \begin {cases}
\map f {n_1, n_2, \ldots, n_k} & : \text{if } \map \RR {n_1, n_2, \ldots, n_k} \text { holds} \\
\map g {n_1, n_2, \ldots, n_k} & : \text{otherwise}
\end {cases}$
so that $h$ is total.
Then $h$ is recursive.


This article contains statements that are justified by handwavery.In particular: It seems to me that we need to assume something about $\RR$ to make it computable which of the two cases holds at any given tupleYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
Let $P_f, P_g, P_\RR$ be the URM programs computing, respectively, the functions $f$ and $g$ and the characteristic function $\chi_\RR$.
From Recursive Function is URM Computable, these programs are guaranteed to exist.
An informal algorithm for computing $h$ is as follows.

Input $\tuple {n_1, n_2, \ldots, n_k}$.
Use $P_\RR$ to determine whether $\map \RR {n_1, n_2, \ldots, n_k}$ holds.
If it holds, use $P_f$ to compute $\map f {n_1, n_2, \ldots, n_k}$.
If it does not hold, use $P_g$ to compute $\map g {n_1, n_2, \ldots, n_k}$.
The result follows from URM Computable Function is Recursive.
$\blacksquare$


Fallacious Proof
We might attempt to show that $h$ is recursive by using the equation:














\(\ds \map h {n_1, n_2, \ldots, n_k}\)

\(=\)







\(\ds \map f {n_1, n_2, \ldots, n_k} \map {\chi_\RR} {n_1, n_2, \ldots, n_k}\)




















\(\ds \)

\(+\)







\(\ds \map g {n_1, n_2, \ldots, n_k} \map {\overline \sgn} {\map {\chi_\RR} {n_1, n_2, \ldots, n_k} }\)









where $\overline \sgn$ is the signum bar function, known to be primitive recursive.
Then the right hand side is obtained by substitution from known recursive functions, so is recursive, and hence $h$ is recursive.

However, this fails as follows.
Although $\map h {n_1, n_2, \ldots, n_k}$ is always defined, 




\(\text {(1)}: \quad\)









\(\ds \)

\(\)







\(\ds \map f {n_1, n_2, \ldots, n_k} \map {\chi_\RR} {n_1, n_2, \ldots, n_k}\)




















\(\ds \)

\(+\)







\(\ds \map g {n_1, n_2, \ldots, n_k} \map {\overline \sgn} {\map {\chi_\RR} {n_1, n_2, \ldots, n_k} }\)









might not be.
$f$ and $g$ might not be total, in which case there may be some $\tuple {n_1, n_2, \ldots, n_k}$ for which at least one of $\map f {n_1, n_2, \ldots, n_k}$ and $\map g {n_1, n_2, \ldots, n_k}$ is not defined.
This means $(1)$ is not defined for those values of $\tuple {n_1, n_2, \ldots, n_k}$.
Note that $(1)$ does define a recursive function, but its domain consists only of those $\tuple {n_1, n_2, \ldots, n_k}$ for which $\map f {n_1, n_2, \ldots, n_k}$ and $\map g {n_1, n_2, \ldots, n_k}$ are both defined.
Thus we establish the result by means of the indirect approach requiring the use of the results concerning the equivalence of recursive functions and URM computable functions.





