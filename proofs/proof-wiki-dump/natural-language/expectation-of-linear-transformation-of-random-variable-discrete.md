# 

Source: https://proofwiki.org/wiki/Expectation_of_Linear_Transformation_of_Random_Variable/Discrete

Theorem
Let $X$ be a discrete random variable. 
Let $a, b$ be real numbers. 

Then we have: 

$\expect {a X + b} = a \expect X + b$
where $\expect X$ denotes the expectation of $X$. 


Proof
We have: 














\(\ds \expect {a X + b}\)

\(=\)







\(\ds \sum_{x \mathop \in \Img X} \paren {a x + b} \map \Pr {X = x}\)





Expectation of Function of Discrete Random Variable














\(\ds \)

\(=\)







\(\ds a \sum_{x \mathop \in \Img X} x \map \Pr {X = x} + b \sum_{x \mathop \in \Img X} \map \Pr {X = x}\)




















\(\ds \)

\(=\)







\(\ds a \expect X + b \times 1\)





Definition of Expectation of Discrete Random Variable, Definition of Probability Mass Function














\(\ds \)

\(=\)







\(\ds a \expect X + b\)









$\blacksquare$





