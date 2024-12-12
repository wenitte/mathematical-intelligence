# 

Source: https://proofwiki.org/wiki/Convex_Hull_is_Smallest_Convex_Set_containing_Set/Lemma



Lemma
Let $X$ be a vector space over $\R$.
Let $U \subseteq X$ be non-empty.
Let $\map {\operatorname {conv} } U$ be the convex hull of $U$.
Let $K \subseteq X$ be a convex set with $U \subseteq K$.

Then: 

$\map {\operatorname {conv} } U \subseteq K$


Proof
From the definition of the convex hull, we have: 

$\ds \map {\operatorname {conv} } U = \set {\sum_{j \mathop = 1}^n \lambda_j u_j : n \in \N, \, u_j \in U \text { and } \lambda_j \in \R_{> 0} \text { for each } j, \, \sum_{j \mathop = 1}^n \lambda_j = 1}$
For each $n \in \N$, let $\map P n$ be the proposition:

for each $\lambda_1, \lambda_2, \ldots, \lambda_n \in \R_{> 0}$ with:
$\ds \sum_{i \mathop = 1}^n \lambda_i = 1$
and $u_1, u_2, \ldots, u_n \in U$, we have:
$\ds \sum_{i \mathop = 1}^n \lambda_i u_i \in K$
We will then have that, for each $n \in \N$, $u_1, u_2, \ldots, u_n \in U$ and $\lambda_1, \lambda_2, \ldots, \lambda_n \in \R_{> 0}$ with: 

$\ds \sum_{i \mathop = 1}^n \lambda_i = 1$
we have: 

$\ds \sum_{i \mathop = 1}^n \lambda_i u_i \in K$
That is: 

$\map {\operatorname {conv} } U \subseteq K$
which was the requirement. 
We proceed by induction.


Basis for the Induction
The case $n = 1$ is precisely the statement that: 

$\lambda_1 u_1 \in K$
for all $u_1 \in U$ whenever $\lambda_1 = 1$. 
That is: 

$u_1 \in K$
whenever $u_1 \in U$.
This is precisely the statement that $U \subseteq K$, which is true by hypothesis. 
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

for each $\lambda_1, \lambda_2, \ldots, \lambda_k \in \R_{> 0}$ with:
$\ds \sum_{i \mathop = 1}^k \lambda_i = 1$
and $u_1, u_2, \ldots, u_k \in U$, we have:
$\ds \sum_{i \mathop = 1}^k \lambda_i u_i \in K$
from which it is to be shown that:

for each $\lambda_1, \lambda_2, \ldots, \lambda_{k + 1} \in \R_{> 0}$ with:
$\ds \sum_{i \mathop = 1}^{k + 1} \lambda_i = 1$
and $u_1, u_2, \ldots, u_{k + 1} \in U$, we have:
$\ds \sum_{i \mathop = 1}^{k + 1} \lambda_i u_i \in K$


Induction Step
Take $\lambda_1, \lambda_2, \ldots, \lambda_{k + 1} \in \R_{> 0}$ with: 

$\ds \sum_{i \mathop = 1}^{k + 1} \lambda_i = 1$
and $u_1, u_2, \ldots, u_{k + 1} \in U$.
We appeal to the convexity of $K$.
Set: 

$t = 1 - \lambda_{k + 1}$
Since we have: 

$0 < \lambda_i < 1$
for each $i$, we have $0 < t < 1$. 
For each $i \in \set {1, 2, \ldots, k}$ set: 

$\ds \mu_i = \frac 1 t \lambda_i$
We then have: 














\(\ds \sum_{i \mathop = 1}^k \mu_i\)

\(=\)







\(\ds \frac 1 t \sum_{i \mathop = 1}^k \lambda_i\)




















\(\ds \)

\(=\)







\(\ds \frac 1 t \paren {\sum_{i \mathop = 1}^{k + 1} \lambda_i - \lambda_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 t \paren {1 - \lambda_{k + 1} }\)





since $\ds \sum_{i \mathop = 1}^{k + 1} \lambda_i = 1$














\(\ds \)

\(=\)







\(\ds \frac t t\)




















\(\ds \)

\(=\)







\(\ds 1\)









and:














\(\ds \sum_{i \mathop = 1}^{k + 1} \lambda_i u_i\)

\(=\)







\(\ds \sum_{i \mathop = 1}^k \lambda_i u_i + \lambda_{k + 1} u_{k + 1}\)




















\(\ds \)

\(=\)







\(\ds t \sum_{i \mathop = 1}^k \mu_i u_i + \paren {1 - t} u_{k + 1}\)









From the induction hypothesis, we have: 

$\ds \sum_{i \mathop = 1}^k \mu_i u_i \in K$
Since $U \subseteq K$ from hypothesis, we have: 

$\ds u_{k + 1} \in K$
So, since $K$ is convex, we have: 

$\ds t \sum_{i \mathop = 1}^k \mu_i u_i + \paren {1 - t} u_{k + 1} \in K$
so:

$\ds \sum_{i \mathop = 1}^{k + 1} \lambda_i u_i \in K$
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$





