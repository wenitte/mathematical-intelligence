# 

Source: https://proofwiki.org/wiki/Expectation_of_Bounded_Random_Variable

Theorem
Let $X$ be a random variable. 
Let $a$ and $b$ be real numbers with $b \ge a$.
Let: 

$\map \Pr {a \le X \le b} = 1$

Then:

$a \le \expect X \le b$
where $\expect X$ denotes the expectation of $X$. 


Proof
From:

$\map \Pr {a \le X \le b} = 1$
it follows that: 

$\map \Pr {X \ge a} = 1$
That is: 

$\map \Pr {X - a \ge 0} = 1$
From Expectation of Non-Negative Random Variable is Non-Negative, we therefore have that: 

$\expect {X - a} \ge 0$
From Expectation of Linear Transformation of Random Variable, we have: 

$\expect X - a \ge 0$
That is:

$\expect X \ge a$
Note that we also have: 

$\map \Pr {X \le b} = 1$
That is: 

$\map \Pr {b - X \ge 0} = 1$
Again applying Expectation of Non-Negative Random Variable is Non-Negative, we have: 

$\expect {b - X} \ge 0$
From Expectation of Linear Transformation of Random Variable, we have: 

$b - \expect X \ge 0$
giving: 

$\expect X \le b$
Putting these inequalities together, we have: 

$a \le \expect X \le b$
$\blacksquare$





