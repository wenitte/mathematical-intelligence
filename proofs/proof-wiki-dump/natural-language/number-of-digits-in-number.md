# 

Source: https://proofwiki.org/wiki/Number_of_Digits_in_Number


It has been suggested that this page or section be merged into Number of Digits to Represent Integer in Given Number Base.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $n \in \Z_{>0}$ be a strictly positive integer.
Let $b \in \Z_{>1}$ be an integer greater than $1$.
Let $n$ be expressed in base $b$.

Then the number of digits $d$ in this expression for $n$ is:

$d = 1 + \floor {\log_b n}$
where:

$\floor {\, \cdot \,}$ denotes the floor function
$\log_b$ denotes the logarithm to base $b$.


Proof
Let $n$ have $d$ digits when expressed in base $b$.
Then $n$ is expressed as:

$n = \sqbrk {n_{d - 1} n_{d - 2} \dotsm d_1 d_0}$
where:

$n = \ds \sum_{k \mathop = 0}^{d - 1} n_k b^k$
Thus:

$b^{d - 1} \le n < b^d$
Thus we have:














\(\ds b^{d - 1}\)

\(\le\)

\(\, \ds n \, \)

\(\, \ds < \, \)



\(\ds b^d\)














\(\ds \leadsto \ \ \)





\(\ds d - 1\)

\(\le\)

\(\, \ds \log_b n \, \)

\(\, \ds < \, \)



\(\ds d\)









By Integer equals Floor iff Number between Integer and One More:

$d - 1 \le \log_b n < d \iff \floor {\log_b n} = d - 1$
and the result follows.
$\blacksquare$





