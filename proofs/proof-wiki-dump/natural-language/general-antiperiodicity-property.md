# 

Source: https://proofwiki.org/wiki/General_Antiperiodicity_Property



Theorem
Let $f: X \to X$ be an antiperiodic function, where $X$ is either $\R$ or $\C$.
Let $L$ be an antiperiodic element of $f$.
Let $n \in \Z$ be an integer.


If $n$ is even, then $n L$ is a periodic element of $f$.
If $n$ is odd, then $n L$ is an antiperiodic element of $f$.


Proof
Suppose that $X = \C$.

Case 1
If $n$ is even, then:














\(\ds \map f {x + n L}\)

\(=\)







\(\ds \map f {x + \paren {2 k} L}\)





for some $k \in \Z$














\(\ds \)

\(=\)







\(\ds \map f {x + \paren {k 2} L}\)





Complex Multiplication is Commutative














\(\ds \)

\(=\)







\(\ds \map f {x + k \paren {2 L} }\)





Complex Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \map f x\)





by Double of Antiperiodic Element is Periodic and the General Periodicity Property



$\Box$


Case 2
If $n$ is odd, then:














\(\ds \map f {x + n L}\)

\(=\)







\(\ds \map f {x + \paren {2 k + 1} L}\)





for some $k \in \Z$














\(\ds \)

\(=\)







\(\ds \map f {x + \paren {\paren {2 k} L + L} }\)





Complex Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \map f {\paren {x + \paren {2 k} L} + L}\)





Complex Addition is Associative














\(\ds \)

\(=\)







\(\ds -\map f {x + \paren {2 k} L}\)




















\(\ds \)

\(=\)







\(\ds -\map f x\)





by Case 1




The proof for when $X = \R$ is nearly identical.
$\blacksquare$





