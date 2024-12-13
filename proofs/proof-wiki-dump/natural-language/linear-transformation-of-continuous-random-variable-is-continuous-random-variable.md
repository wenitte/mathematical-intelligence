# 

Source: https://proofwiki.org/wiki/Linear_Transformation_of_Continuous_Random_Variable_is_Continuous_Random_Variable

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space. 
Let $a$ be a non-zero real number. 
Let $b$ be a real number. 
Let $X$ be a continuous real variable.
Let $F_X$ be the cumulative distribution function of $X$. 

Then $a X + b$ is a continuous real variable.

Further, if $a > 0$, the cumulative distribution function of $a X + b$, $F_{a X + b}$. is given by: 

$\ds \map {F_{a X + b} } x = \map {F_X} {\frac {x - b} a}$
for each $x \in \R$.
If $a < 0$, $F_{a X + b}$ is given by: 

$\ds \map {F_{a X + b} } x = 1 - \map {F_X} {\frac {x - b} a}$
for each $x \in \R$. 


Proof
From Linear Transformation of Real-Valued Random Variable is Real-Valued Random Variable, $a X + b$ is a real-valued random variable.
Since $X$ is a continuous real variable, we have that: 

$F_X$ is continuous.
We use this fact to show that $F_{a X + b}$ is continuous, showing that $a X + b$ is a continuous real variable.
We split up into cases.

Suppose that $a > 0$. 
Then, for each $x \in \R$, we have: 














\(\ds \map {F_{a X + b} } x\)

\(=\)







\(\ds \map \Pr {a X + b \le x}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {a X \le x - b}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {X \le \frac {x - b} a}\)




















\(\ds \)

\(=\)







\(\ds \map {F_X} {\frac {x - b} a}\)





Definition of Cumulative Distribution Function



From Composite of Continuous Mappings is Continuous and Linear Function is Continuous, we therefore have: 

$F_{a X + b}$ is continuous
in the case $a > 0$.

Now suppose that $a < 0$. 
Then, for each $x \in \R$, we have: 














\(\ds \map {F_{a X + b} } x\)

\(=\)







\(\ds \map \Pr {a X + b \le x}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {a X \le x - b}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {X \ge \frac {x - b} a}\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {\Omega \setminus \set {X < \frac {x - b} a} }\)




















\(\ds \)

\(=\)







\(\ds 1 - \map \Pr {X < \frac {x - b} a}\)





Probability of Event not Occurring














\(\ds \)

\(=\)







\(\ds 1 - \map \Pr {X \le \frac {x - b} a}\)





Probability of Continuous Random Variable Lying in Singleton Set is Zero














\(\ds \)

\(=\)







\(\ds 1 - \map {F_X} {\frac {x - b} a}\)









From Composite of Continuous Mappings is Continuous and Linear Function is Continuous, we therefore have: 

$F_{a X + b}$ is continuous
in the case $a < 0$.
$\blacksquare$





