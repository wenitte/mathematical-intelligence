# 

Source: https://proofwiki.org/wiki/Divisor_Count_Function_of_Prime_Number



Theorem
Let $p \in \Z_{> 0}$.
Then $p$ is a prime number if and only if:

$\map {\sigma_0} p = 2$
where $\map {\sigma_0} p$ denotes the divisor count function of $p$.


Proof
Necessary Condition
Let $p$ be a prime number.
Then, by definition, the only positive divisors of $p$ are $1$ and $p$.
Hence by definition of the divisor count function:

$\map {\sigma_0} p = 2$
$\Box$


Sufficient Condition
Suppose $\map {\sigma_0} p = 2$.
Then by One Divides all Integers we have:

$1 \divides p$
Also, by Integer Divides Itself we have:

$p \divides p$
So if $p > 1$ it follows that $\map {\sigma_0} p \ge 2$.
Now for $\map {\sigma_0} p = 2$ it must follow that the only divisors of $p$ are $1$ and $p$.
That is, that $p$ is a prime number.
$\blacksquare$





