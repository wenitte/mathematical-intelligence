# 

Source: https://proofwiki.org/wiki/Recurrence_Relation_for_Euler_Numbers

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Then:














\(\ds E_{2 n}\)

\(=\)







\(\ds -\sum_{k \mathop = 0}^{n - 1} \dbinom {2 n} {2 k} E_{2 k}\)




















\(\ds \)

\(=\)







\(\ds -\paren {\binom {2 n} 0 E_0 + \binom {2 n} 2 E_2 + \binom {2 n} 4 E_4 + \cdots + \binom {2 n} {2 n - 2} E_{2 n - 2} }\)









where $E_n$ denotes the $n$th Euler number.


Proof









\(\ds \forall n \in \Z_{>0}: \, \)



\(\ds \sum_{k \mathop = 0}^n \binom {2 n} {2 k} E_{2 k}\)

\(=\)







\(\ds 0\)





Sum of Euler Numbers by Binomial Coefficients Vanishes








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^{n - 1} \dbinom {2 n} {2 k} E_{2 k} + \dbinom {2 n} {2 n} E_{2 n}\)

\(=\)







\(\ds 0\)





separating out case where $k = n$








\(\ds \leadsto \ \ \)





\(\ds E_{2 n}\)

\(=\)







\(\ds -\sum_{k \mathop = 0}^{n - 1} \dbinom {2 n} {2 k} E_{2 k}\)





Binomial Coefficient with Self: $\dbinom {2 n} {2 n} = 1$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 21$: Relationships of Bernoulli and Euler Numbers: $21.6$




