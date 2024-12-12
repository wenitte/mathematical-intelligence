# 

Source: https://proofwiki.org/wiki/Factorial_is_not_of_Exponential_Order

Theorem
Let $\Gamma$ denote the gamma function.
Let $\map f t = \map \Gamma {t + 1} = t!$.
Then:

$f$ is not of exponential order.
That is, it grows faster than any exponential.


Proof
From Gamma Function is Continuous on Positive Reals, $f$ is continuous for $t \ge 0$.
Set $t > 0$.
From Stirling's Formula:

$t! \sim \sqrt {2 \pi t} \paren {\dfrac t e}^t$
where $\sim$ denotes asymptotic equality.
That is, 














\(\ds t!\)

\(\sim\)







\(\ds \sqrt {2 \pi t} \paren {\frac t e}^t\)




















\(\ds \)

\(>\)







\(\ds t^t \, e^{-t}\)









Aiming for a contradiction, suppose $t^t \, e^{-t}$ is of exponential order $a$. 
Then, for $t$ sufficiently large, there exists a $K > 0$ such that:














\(\ds t^t \, e^{-t}\)

\(<\)







\(\ds K e^{a t}\)














\(\ds \leadsto \ \ \)





\(\ds t^t\)

\(<\)







\(\ds K e^{\paren {a + 1} t}\)









This implies that $t^t$ is of exponential order, which is false.
From this contradiction it follows that $t!$ is also not of exponential order.
$\blacksquare$





