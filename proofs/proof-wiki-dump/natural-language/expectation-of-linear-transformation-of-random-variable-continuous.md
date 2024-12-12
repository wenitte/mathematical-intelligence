# 

Source: https://proofwiki.org/wiki/Expectation_of_Linear_Transformation_of_Random_Variable/Continuous

Theorem
Let $X$ be a continuous random variable. 
Let $a, b$ be real numbers. 

Then we have: 

$\expect {a X + b} = a \expect X + b$
where $\expect X$ denotes the expectation of $X$. 


Proof
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





