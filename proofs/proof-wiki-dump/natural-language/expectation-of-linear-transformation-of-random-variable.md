# 

Source: https://proofwiki.org/wiki/Expectation_of_Linear_Transformation_of_Random_Variable



Theorem
Let $X$ be a random variable. 
Let $a, b$ be real numbers. 
Let $\expect X$ denote the expectation of $X$. 

Then we have: 

$\expect {a X + b} = a \expect X + b$
if that expectation exists.


Proof
Discrete Random Variable
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


Continuous Random Variable
Let $\map \supp X$ be the support of $X$. 
Let $f_X : \map \supp X \to \R$ be the probability density function of $X$.


The validity of the material on this page is questionable.In particular: What if the density $f_X$ does not exist?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Then:














\(\ds \expect {a X + b}\)

\(=\)







\(\ds \int_{x \mathop \in \map \supp X} \paren {a x + b} \map {f_X} x \rd x\)





Expectation of Function of Continuous Random Variable














\(\ds \)

\(=\)







\(\ds a \int_{x \mathop \in \map \supp X} x \map {f_X} x \rd x + b \int_{x \mathop \in \map \supp X} \map {f_X} x \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds a \expect X + b \times 1\)





Definition of Expectation of Continuous Random Variable














\(\ds \)

\(=\)







\(\ds a \expect X + b\)









$\blacksquare$





