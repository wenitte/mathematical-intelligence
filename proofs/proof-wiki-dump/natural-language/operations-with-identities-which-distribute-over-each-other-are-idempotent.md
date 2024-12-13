# 

Source: https://proofwiki.org/wiki/Operations_with_Identities_which_Distribute_over_each_other_are_Idempotent

Theorem
Let $S$ be a set.
Let $\odot$ and $\otimes$ be operations on $S$ which have identity elements $e$ and $u$ respectively.
Let $\odot$ and $\otimes$ be distributive over each other.

Then $\odot$ and $\otimes$ are both idempotent.


Proof













\(\ds e \otimes \paren {u \odot e}\)

\(=\)







\(\ds \paren {e \otimes u} \odot \paren {e \otimes e}\)





as $\otimes$ is distributive over $\odot$








\(\ds \leadsto \ \ \)





\(\ds e \otimes u\)

\(=\)







\(\ds \paren {e \otimes u} \odot \paren {e \otimes e}\)





as $e$ is the identity of $\odot$








\(\ds \leadsto \ \ \)





\(\ds e\)

\(=\)







\(\ds e \odot \paren {e \otimes e}\)





as $u$ is the identity of $\otimes$








\(\ds \leadsto \ \ \)





\(\ds e\)

\(=\)







\(\ds e \otimes e\)





as $e$ is the identity of $\odot$




In the same way:














\(\ds u \odot \paren {e \otimes u}\)

\(=\)







\(\ds \paren {u \odot e} \otimes \paren {u \odot u}\)





as $\odot$ is distributive over $\otimes$








\(\ds \leadsto \ \ \)





\(\ds u \odot e\)

\(=\)







\(\ds \paren {u \odot e} \otimes \paren {u \odot u}\)





as $u$ is the identity of $\otimes$








\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds u \otimes \paren {u \odot u}\)





as $e$ is the identity of $\odot$








\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds u \odot u\)





as $u$ is the identity of $\otimes$




Then we have:










\(\ds \forall a \in S: \, \)



\(\ds a \otimes a\)

\(=\)







\(\ds \paren {a \odot e} \otimes \paren {a \odot e}\)





as $e$ is the identity of $\odot$














\(\ds \)

\(=\)







\(\ds a \odot \paren {e \otimes e}\)





as $\odot$ is distributive over $\otimes$














\(\ds \)

\(=\)







\(\ds a \odot e\)





a priori














\(\ds \)

\(=\)







\(\ds a\)





as $e$ is the identity of $\odot$




and:










\(\ds \forall a \in S: \, \)



\(\ds a \odot a\)

\(=\)







\(\ds \paren {a \otimes u} \odot \paren {a \otimes u}\)





as $u$ is the identity of $\otimes$














\(\ds \)

\(=\)







\(\ds a \otimes \paren {u \odot u}\)





as $\otimes$ is distributive over $\odot$














\(\ds \)

\(=\)







\(\ds a \otimes u\)





a priori














\(\ds \)

\(=\)







\(\ds a\)





as $u$ is the identity of $\otimes$



Hence the result by definition of idempotent operation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.22$




