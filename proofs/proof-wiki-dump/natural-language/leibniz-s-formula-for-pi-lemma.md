# 

Source: https://proofwiki.org/wiki/Leibniz%27s_Formula_for_Pi/Lemma

Lemma













\(\ds \frac 1 {1 + t^2}\)

\(=\)







\(\ds 1 - t^2 + t^4 - t^6 + \cdots + t^{4 n} - \frac {t^{4 n + 2} } {1 + t^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 0}^{2 n} \paren {-1}^k t^{2 k} } - \frac {t^{4 n + 2} } {1 + t^2}\)









This holds for all real $t \in \R$.


Proof













\(\ds \frac {1 - \paren {-t^2}^{2 n + 1} } {1 - \paren {-t^2} }\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{2 n} \paren {-t^2}^k\)





Sum of Geometric Sequence








\(\ds \leadsto \ \ \)





\(\ds \frac {1 + \paren {t^2}^{2 n + 1} } {1 + t^2}\)

\(=\)







\(\ds 1 - t^2 + t^4 - t^6 + \cdots + t^{4 n}\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 {1 + t^2} + \frac {t^{4 n + 2} } {1 + t^2}\)

\(=\)







\(\ds 1 - t^2 + t^4 - t^6 + \cdots + t^{4 n}\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 {1 + t^2}\)

\(=\)







\(\ds 1 - t^2 + t^4 - t^6 + \cdots + t^{4 n} - \frac {t^{4 n + 2} } {1 + t^2}\)










From Square of Real Number is Non-Negative, we have that:

$t^2 \ge 0$
for all real $t$.
So $- t^2 \le 0$ and so $- t^2 \ne 1$.
So the conditions of Sum of Geometric Sequence are satisfied, and so the above argument holds for all real $t$.
$\blacksquare$





