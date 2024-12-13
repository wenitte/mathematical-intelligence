# 

Source: https://proofwiki.org/wiki/Minimum_of_Finitely_Many_Continuous_Real_Functions_is_Continuous


This article needs to be linked to other articles.In particular: here and thereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $n \ge 2$ be a natural number.
Let $X \subseteq \R$. 
Let $f_1, f_2, \ldots, f_n$ be functions $X \to \R$.
Define the function $m : X \to \R$ by:

$\ds \map m x = \min_i \map {f_i} x$
for all $x \in X$.

Then $m$ is continuous. 


Proof
We proceed by induction.
For all natural numbers $n \ge 2$, let $\map P n$ be the proposition:

for every collection of $n$ functions $f_1, f_2, \ldots, f_n : X \to \R$, $m$ is continuous.


Basis for the Induction
Take $n = 2$. 
We have, for each $x \in X$:














\(\ds \map m x\)

\(=\)







\(\ds \min \set {\map {f_1} x, \map {f_2} x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\paren {\map {f_1} x + \map {f_2} x} - \size {\map {f_1} x - \map {f_2} x} }\)





Minimum Function in terms of Absolute Value



From Combined Sum Rule for Continuous Real Functions:

$f_1 + f_2$ and $f_1 - f_2$ are continuous.
From Absolute Value of Continuous Real Function is Continuous:

$\size {f_1 - f_2}$ is continuous.
Applying Combined Sum Rule for Continuous Real Functions again, we obtain:

$m$ is continuous.
So $\map P 2$ is true.
This is our base case.


Induction Hypothesis
Suppose that: 

for every collection of $N$ functions $f_1, f_2, \ldots, f_N : X \to \R$, $m$ is continuous.
That is:

$\map P N$ is true for some $N$.
We aim to show that: 

$\map P {N + 1}$ is true.


Induction Step
For each $x \in X$, we have:














\(\ds \map m x\)

\(=\)







\(\ds \min_i \map {f_i} x\)




















\(\ds \)

\(=\)







\(\ds \min \set {\min_{i \mathop \le N} \map {f_i} x, \map {f_{N + 1} } x}\)









By the induction hypothesis: 

$\ds \min_{i \mathop \le N} f_i$
is continuous.
Since $m$ is the minimum of two continuous functions, it is continuous by the base case.
So $\map P N \implies \map P {N + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$





