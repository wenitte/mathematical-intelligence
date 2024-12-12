# 

Source: https://proofwiki.org/wiki/Dirichlet_Function_is_Periodic

Theorem
Let $D: \R \to \R$ be a Dirichlet function:

$\forall x \in \R: \map D x = \begin{cases} c & : x \in \Q \\ d & : x \notin \Q \end{cases}$

Then $D$ is periodic.
Namely, every non-zero rational number is a periodic element of $D$.


Proof
Let $x \in \R$.
Let $L \in \Q$.

If $x \in \Q$, then:














\(\ds \map D {x + L}\)

\(=\)







\(\ds c\)





Rational Addition is Closed














\(\ds \)

\(=\)







\(\ds \map D x\)









If $x \notin \Q$, then:














\(\ds \map D {x + L}\)

\(=\)







\(\ds d\)





Rational Number plus Irrational Number is Irrational














\(\ds \)

\(=\)







\(\ds \map D x\)









Combining the above two shows that:

$\forall x \in \R: \map D x = \map D {x + L}$

Hence the result.
$\blacksquare$





