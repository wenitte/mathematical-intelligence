# 

Source: https://proofwiki.org/wiki/Order_of_Floor_Function

Theorem
Let $\floor x$ denote the floor function of $x$. 

Then:

$\floor x = x + \map \OO 1$
where $\OO$ is big-O notation.


Proof
From Floor is between Number and One Less: 

$\floor x \le x < \floor x + 1$
so:

$0 \le x - \floor x < 1$
By the definition of the absolute value function, we have: 

$\size {\floor x - x} < 1$
so by the definition of Big-O notation, we have:

$\floor x - x = \map \OO 1$
We can conclude that:

$\floor x = x + \map \OO 1$
$\blacksquare$





