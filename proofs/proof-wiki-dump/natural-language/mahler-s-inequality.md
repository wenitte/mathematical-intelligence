# 

Source: https://proofwiki.org/wiki/Mahler%27s_Inequality

Theorem
The geometric mean of the termwise sum of two finite sequences of positive real numbers is never less than the sum of their two separate geometric means:

$\ds \prod_{k \mathop = 1}^n \paren {x_k + y_k}^{1/n} \ge \prod_{k \mathop = 1}^n x_k^{1/n} + \prod_{k \mathop = 1}^n y_k^{1/n}$
where $x_k, y_k > 0$ for all $k$.


Proof













\(\ds \prod_{k \mathop = 1}^n \paren {\frac {x_k} {x_k + y_k} }^{1/n}\)

\(\le\)







\(\ds \frac 1 n \sum_{k \mathop = 1}^n \frac {x_k} {x_k + y_k}\)





Cauchy's Mean Theorem














\(\ds \prod_{k \mathop = 1}^n \paren {\frac {y_k} {x_k + y_k} }^{1/n}\)

\(\le\)







\(\ds \frac 1 n \sum_{k \mathop = 1}^n \frac {y_k} {x_k + y_k}\)





Cauchy's Mean Theorem








\(\ds \leadsto \ \ \)





\(\ds \prod_{k \mathop = 1}^n \paren {\frac {x_k} {x_k + y_k} }^{1/n} + \prod_{k \mathop = 1}^n \paren {\frac {y_k} {x_k + y_k} }^{1/n}\)

\(\le\)







\(\ds \frac 1 n \sum_{k \mathop = 1}^n \frac {x_k} {x_k + y_k} + \frac 1 n \sum_{k \mathop = 1}^n \frac {y_k} {x_k + y_k}\)





adding them together














\(\ds \)

\(=\)







\(\ds \frac 1 n \sum_{k \mathop = 1}^n \frac {x_k + y_k} {x_k + y_k}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 n n\)




















\(\ds \)

\(=\)







\(\ds 1\)









This leads to:














\(\ds \prod_{k \mathop = 1}^n \paren {\frac {x_k} {x_k + y_k} }^{1/n} + \prod_{k \mathop = 1}^n \paren {\frac {y_k} {x_k + y_k} }^{1/n}\)

\(\le\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\ds \prod_{k \mathop = 1}^n \paren {x_k}^{1/n} } {\ds \prod_{k \mathop = 1}^n \paren {x_k + y_k}^{1/n} } + \frac {\ds \prod_{k \mathop = 1}^n \paren {y_k}^{1/n} } {\ds \prod_{k \mathop = 1}^n \paren {x_k + y_k}^{1/n} }\)

\(\le\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\ds \prod_{k \mathop = 1}^n \paren {x_k}^{1/n} + \prod_{k \mathop = 1}^n \paren {y_k}^{1/n} } {\ds \prod_{k \mathop = 1}^n \paren {x_k + y_k}^{1/n} }\)

\(\le\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \prod_{k \mathop = 1}^n \paren {x_k}^{1/n} + \prod_{k \mathop = 1}^n \paren {y_k}^{1/n}\)

\(\le\)







\(\ds \prod_{k \mathop = 1}^n \paren {x_k + y_k}^{1/n}\)









$\blacksquare$


Source of Name
This entry was named for Kurt Mahler.





