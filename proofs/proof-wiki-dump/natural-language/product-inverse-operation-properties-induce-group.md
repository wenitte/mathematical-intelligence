# 

Source: https://proofwiki.org/wiki/Product_Inverse_Operation_Properties_induce_Group



Theorem
Let $\struct {G, \oplus}$ be a closed algebraic structure on which the following properties hold:




\((\text {PI} 1)\)  

$:$  



Self-Inverse Property   

  \(\ds \forall x \in G:\)

\(\ds x \oplus x = e \)   







  


\((\text {PI} 2)\)  

$:$  



Right Identity   

  \(\ds \exists e \in G: \forall x \in G:\)

\(\ds x \oplus e = x \)   







  


\((\text {PI} 3)\)  

$:$  



Product Inverse with Right Identity   

  \(\ds \forall x, y \in G:\)

\(\ds e \oplus \paren {x \oplus y} = y \oplus x \)   







  


\((\text {PI} 4)\)  

$:$  



Cancellation Property   

  \(\ds \forall x, y, z \in G:\)

\(\ds \paren {x \oplus z} \oplus \paren {y \oplus z} = x \oplus y \)   







  

These four stipulations are known as the product inverse operation axioms.

Let $\circ$ be the operation on $G$ defined as:

$\forall x, y \in G: x \circ y = x \oplus \paren {e \oplus y}$

Then $\struct {G, \circ}$ is a group.


Proof
Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
$\struct {G, \oplus}$ is closed by definition.
Hence $\struct {G, \circ}$ is likewise closed.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element













\(\ds x \circ e\)

\(=\)







\(\ds x \oplus \paren {e \oplus e}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds x \oplus e\)





$\text {PI} 1$: Self-Inverse Property














\(\ds \)

\(=\)







\(\ds x\)





$\text {PI} 2$: Right Identity



and:














\(\ds e \circ x\)

\(=\)







\(\ds e \oplus \paren {e \oplus x}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds x \oplus e\)





$\text {PI} 3$: Product Inverse with Right Identity














\(\ds \)

\(=\)







\(\ds x\)





$\text {PI} 2$: Right Identity




Thus $e$ is the identity element of $\struct {G, \circ}$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
We have that $e$ is the identity element of $\struct {G, \circ}$.
Hence:










\(\ds \forall x \in G: \, \)



\(\ds x \circ \paren {e \oplus x}\)

\(=\)







\(\ds x \oplus \paren {e \oplus \paren {e \oplus x} }\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds x \oplus \paren {x \oplus e}\)





$\text {PI} 3$: Product Inverse with Right Identity














\(\ds \)

\(=\)







\(\ds x \oplus x\)





$\text {PI} 2$: Right Identity














\(\ds \)

\(=\)







\(\ds e\)





$\text {PI} 1$: Self-Inverse Property




and:










\(\ds \forall x \in G: \, \)



\(\ds \paren {e \oplus x} \circ x\)

\(=\)







\(\ds \paren {e \oplus x} \oplus \paren {e \oplus x}\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds e \oplus e\)





$\text {PI} 4$: Cancellation Property














\(\ds \)

\(=\)







\(\ds e\)





$\text {PI} 1$: Self-Inverse Property




Thus every element $x$ of $\struct {G, \circ}$ has inverse $e \oplus x$.
$\Box$


Group Axiom $\text G 1$: Associativity
We have:










\(\ds \forall x, y, z \in G: \, \)



\(\ds x \circ \paren {y \circ z}\)

\(=\)







\(\ds x \circ \paren {y \oplus \paren {e \oplus z} }\)





Definition of $\circ$














\(\ds \)

\(=\)







\(\ds \paren {\paren {x \circ y} \oplus y} \circ \paren {y \oplus \paren {e \oplus z} }\)





Product Inverse Operation Properties: Lemma $5$: substituting $\paren {x \circ y} \oplus y$ for $x$














\(\ds \)

\(=\)







\(\ds \paren {x \circ y} \oplus \paren {e \oplus z}\)





Product Inverse Operation Properties: Lemma $2$














\(\ds \)

\(=\)







\(\ds \paren {x \circ y} \circ z\)





Definition of $\circ$



Thus $\circ$ is associative.
$\Box$

All the group axioms are thus seen to be fulfilled, and so $\struct {G, \circ}$  is a group.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.7 \ \text {(b)}$




