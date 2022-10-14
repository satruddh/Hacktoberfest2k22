import java.awt.BorderLayout;
import java.awt.FileDialog;
import java.awt.event.ActionEvent;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileOutputStream;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.DataOutputStream;
import java.io.IOException;
import javax.swing.filechooser.*;

/**
 *
 * @author SPN RAO
 */
public class MyNotepad extends javax.swing.JFrame
{
    private javax.swing.JPanel panel;
    private javax.swing.JTextArea area;
    private javax.swing.JScrollPane scroll;
    private javax.swing.JLabel fnl;
    private javax.swing.JMenuBar menubar;
    private javax.swing.JMenu file;
    private javax.swing.JMenu edit;
    private javax.swing.JMenu view;
    private javax.swing.JMenu lnf;
    private javax.swing.JMenu help;
    private javax.swing.JMenuItem close;
    private javax.swing.JMenuItem open;
    private javax.swing.JMenuItem save;
    private javax.swing.JMenuItem saveas;
    private javax.swing.JMenuItem clear;
    private javax.swing.JMenuItem windows;
    private javax.swing.JMenuItem metal;
    private javax.swing.JMenuItem motif;
    private javax.swing.JMenuItem nimbus;
    private javax.swing.JMenuItem about;
    private javax.swing.JCheckBoxMenuItem isEdi;
    private javax.swing.JCheckBoxMenuItem txtarea;
    private javax.swing.JPopupMenu.Separator sep1;
    private javax.swing.JPopupMenu.Separator sep2;
    
    public MyNotepad()
    {
        initComponents();
    }
    
    private void initComponents()
    {
        panel=new javax.swing.JPanel();
        area=new javax.swing.JTextArea();
        scroll=new javax.swing.JScrollPane();
        menubar = new javax.swing.JMenuBar();
        fnl= new javax.swing.JLabel("");
        file = new javax.swing.JMenu();
        close=new javax.swing.JMenuItem();
        open=new javax.swing.JMenuItem();
        save=new javax.swing.JMenuItem();
        saveas =new javax.swing.JMenuItem();
        edit=new javax.swing.JMenu();
        isEdi =new javax.swing.JCheckBoxMenuItem();
        clear=new javax.swing.JMenuItem();
        view =new javax.swing.JMenu();
        txtarea=new javax.swing.JCheckBoxMenuItem();
        lnf=new javax.swing.JMenu();
        windows =new javax.swing.JMenuItem();
        metal = new javax.swing.JMenuItem();
        motif = new javax.swing.JMenuItem();
        nimbus = new javax.swing.JMenuItem();
        help=new javax.swing.JMenu();
        about = new javax.swing.JMenuItem();
        sep1 = new javax.swing.JPopupMenu.Separator();
        sep1 = new javax.swing.JPopupMenu.Separator();
        
        panel.setLayout(new BorderLayout());
        
        
        file.setText("File");
        file.setMnemonic(KeyEvent.VK_F);
        close.setText("Close");
        close.setAccelerator(javax.swing.KeyStroke.getKeyStroke(KeyEvent.VK_X,java.awt.event.InputEvent.CTRL_DOWN_MASK));
        close.setToolTipText("Exit application");
        close.addActionListener((ActionEvent event) -> {
            closeActionPerformed(event);
        });
        open.setText("Open...");
        open.setAccelerator(javax.swing.KeyStroke.getKeyStroke(KeyEvent.VK_O,java.awt.event.InputEvent.CTRL_DOWN_MASK));
        open.setToolTipText("Open Files");
        open.addActionListener((ActionEvent ev) -> {
            openActionPerformed(ev);
        });
        save.setText("Save");
        save.setAccelerator(javax.swing.KeyStroke.getKeyStroke(KeyEvent.VK_S,java.awt.event.InputEvent.CTRL_DOWN_MASK));
        save.addActionListener((ActionEvent evt) -> {
            saveActionPerformed(evt);
        });
        saveas.setText("Save As...");
        saveas.setAccelerator(javax.swing.KeyStroke.getKeyStroke(KeyEvent.VK_S,java.awt.event.InputEvent.SHIFT_DOWN_MASK | java.awt.event.InputEvent.CTRL_DOWN_MASK));
        saveas.addActionListener((ActionEvent evt) -> {
            saveasActionPerformed(evt);
        });    
        file.add(open);
        file.addSeparator();
        file.add(save);
        file.add(saveas);
        file.addSeparator();
        file.add(close);
        menubar.add(file);
        edit.setText("Edit");
        clear.setText("Clear");
        clear.addActionListener((ActionEvent e) -> {
            clearActionPerformed(e);
        });
        isEdi.setText("Set Editable");
        isEdi.setState(true);
        isEdi.addActionListener((ActionEvent evt) -> {
            isEdiActionPerformed(evt);
        });
        edit.add(clear);
        edit.add(isEdi);
        menubar.add(edit);
        view.setText("View");
        txtarea.setText("Show Text Area");
        txtarea.setState(area.isVisible());
        txtarea.addActionListener((ActionEvent evt) -> {
            txtareaActionPerformed(evt);
        });
        lnf.setText("Look And Feel");
        windows.setText("Windows");
        windows.addActionListener((ActionEvent evt) -> {
            windowsActionPerformed(evt);
        });
        lnf.add(windows);
        metal.setText("Metal");
        metal.addActionListener((ActionEvent ev) -> {
            metalActionPerformed(ev);
        });
        lnf.add(metal);
        motif.setText("Motif");
        motif.addActionListener((ActionEvent ev) -> {
            motifActionPerformed(ev);
        });
        lnf.add(motif);
        nimbus.setText("Nimbus");
        nimbus.addActionListener((ActionEvent ev) -> {
            nimbusActionPerformed(ev);
        });
        lnf.add(nimbus);
        view.add(lnf);
        view.add(txtarea);
        menubar.add(view);
        help.setText("Help");
        about.setText("About...");
        about.addActionListener((ActionEvent evt) -> {
            aboutActionPerformed(evt);
        });
        help.add(about);
        menubar.add(help);
        area.setBorder(javax.swing.BorderFactory.createEtchedBorder(10,java.awt.Color.BLUE,java.awt.Color.GREEN));
        area.setEditable(true);
        area.setTabSize(4);
        scroll.getViewport().add(area);
        panel.setBorder(javax.swing.BorderFactory.createEmptyBorder(0,0,10,0));
        panel.add(scroll);
        setTitle("Sample Notepad");
        setJMenuBar(menubar);
        setSize(new java.awt.Dimension(900, 600));
        add(panel);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE);
        setFocusable(true); 
    }
    
    private void closeActionPerformed(ActionEvent evt){
        System.exit(0);
    }
    
    private void openActionPerformed(ActionEvent evt)
    {
        javax.swing.JFileChooser cf=new javax.swing.JFileChooser();
        FileFilter jv=new FileNameExtensionFilter("JAVA file","java");
        FileFilter js=new FileNameExtensionFilter("JavaScript File","js");
        cf.addChoosableFileFilter(jv);
        cf.addChoosableFileFilter(js);
        int ret=cf.showDialog(panel,"OpenFile");
                
        if(ret ==javax.swing.JFileChooser.APPROVE_OPTION)
        {
            File opf=cf.getSelectedFile();
            fnl.setText(""+cf.getSelectedFile());
            String text=readFile(opf);
            area.setText(text);
            setTitle(fnl.getText().substring(fnl.getText().lastIndexOf('\\')+1)+" - Sample Notepad");
            area.setVisible(true);
        }
        else if(ret==javax.swing.JFileChooser.CANCEL_OPTION)
            setTitle("Blank - Sample Notepad");
        
    }
    
    private void saveActionPerformed(ActionEvent evt)
    {
        String filename=fnl.getText();
        if(filename.contains("\\"))
        {
            
            try
            {
                FileOutputStream un=new FileOutputStream(new File(filename));
                DataOutputStream wr=new DataOutputStream(un);
                wr.writeBytes(area.getText());
                wr.flush();
                wr.close();
            }
            catch( IOException ioe)
            {
                ioe.printStackTrace();
            }
        }
        else
        {
            Save_as();
        }
    }
    
    private void saveasActionPerformed(ActionEvent evt)
    {
        Save_as();
    }
    
    private void clearActionPerformed(ActionEvent evt)
    {
        area.setText("");
    }
    
    private void isEdiActionPerformed(ActionEvent evt)
    {
        if(!(isEdi.getState()))
        {
            area.setEditable(false);
        }
        else
        {
            area.setEditable(true);
        }
    }
    
    private void txtareaActionPerformed(ActionEvent evt)
    {
        if(area.isVisible())
        {
            area.setVisible(false);
            txtarea.setState(false);
        }
        else
        {
            area.setVisible(true);
            txtarea.setVisible(true);
        }
    }
    
    private void windowsActionPerformed(ActionEvent evt)
    {
        try
        {
            javax.swing.UIManager.setLookAndFeel("com.sun.java.swing.plaf.windows.WindowsLookAndFeel");
            javax.swing.SwingUtilities.updateComponentTreeUI(this);
        }
        catch(ClassNotFoundException e)
        {
            System.out.println("LookAndFeel Class Not Found");
        }
        catch(IllegalAccessException e)
        {
            System.out.println("Access Denined");
        }
        catch(InstantiationException e)
        {
            System.out.println("Could Not Load LookAndFeel Class");
        }
        catch(javax.swing.UnsupportedLookAndFeelException e)
        {
            System.out.println("LookAndFeel is not supported");
        } 
    }
    private void motifActionPerformed(ActionEvent evt)
    {
        try
        {
            javax.swing.UIManager.setLookAndFeel("com.sun.java.swing.plaf.motif.MotifLookAndFeel");
            javax.swing.SwingUtilities.updateComponentTreeUI(this);
        }
        catch(ClassNotFoundException e)
        {
            System.out.println("LookAndFeel Class Not Found");
        }
        catch(IllegalAccessException e)
        {
            System.out.println("Access Denined");
        }
        catch(InstantiationException e)
        {
            System.out.println("Could Not Load LookAndFeel Class");
        }
        catch(javax.swing.UnsupportedLookAndFeelException e)
        {
            System.out.println("LookAndFeel is not supported");
        }
                
    }
    private void metalActionPerformed(ActionEvent evt)
    {
        try
        {
            javax.swing.UIManager.setLookAndFeel("javax.swing.plaf.metal.MetalLookAndFeel");
            javax.swing.SwingUtilities.updateComponentTreeUI(this);
        }
        catch(ClassNotFoundException e)
        {
            System.out.println("LookAndFeel Class Not Found");
        }
        catch(IllegalAccessException e)
        {
            System.out.println("Access Denined");
        }
        catch(InstantiationException e)
        {
            System.out.println("Could Not Load LookAndFeel Class");
        }
        catch(javax.swing.UnsupportedLookAndFeelException e)
        {
            System.out.println("LookAndFeel is not supported");
        }
                
    }
    private void nimbusActionPerformed(ActionEvent evt)
    {
        try
        {
            javax.swing.UIManager.setLookAndFeel("javax.swing.plaf.nimbus.NimbusLookAndFeel");
            javax.swing.SwingUtilities.updateComponentTreeUI(this);
        }
        catch(ClassNotFoundException e)
        {
            System.out.println("LookAndFeel Class Not Found");
        }
        catch(IllegalAccessException e)
        {
            System.out.println("Access Denined");
        }
        catch(InstantiationException e)
        {
            System.out.println("Could Not Load LookAndFeel Class");
        }
        catch(javax.swing.UnsupportedLookAndFeelException e)
        {
            System.out.println("LookAndFeel is not supported");
        }                
    }
    
    private void aboutActionPerformed(ActionEvent evt)
    {
        javax.swing.JOptionPane.showMessageDialog(null,"By:-       Surya Pratap\nEmail:-  spnrao2013@gmail.com\n\n             \u00A9 All Rights Reserved.\n                        v 1.0","About...",javax.swing.JOptionPane.INFORMATION_MESSAGE);
    }
    
    public String readFile(File f1)
    {
        StringBuffer fileBuffer=null;
        String fileString=null;
        String line=null;   
        try{
            FileReader in=new FileReader(f1);
            BufferedReader brd=new BufferedReader(in);
            fileBuffer=new StringBuffer();
            while((line=brd.readLine())!=null)
            {
                fileBuffer.append(line + System.getProperty("line.separator"));
            }
            in.close();
            fileString=fileBuffer.toString();
        }
        catch(IOException e)
        {
            e.printStackTrace();
        }
        return fileString;
    }
    
    public void Save_as()
    {
        FileDialog fd = new FileDialog(new javax.swing.JFrame(), "Save File", FileDialog.SAVE);
        fd.show();
        fnl.setText(""+fd.getDirectory()+fd.getFile()+".txt");
        try
        {
        	DataOutputStream dos=new DataOutputStream(new FileOutputStream(new File(fnl.getText())));
        	dos.writeBytes(area.getText());
        	dos.flush();
        	dos.close();
        }
        catch (IOException e) {
        	e.printStackTrace();
        }
    }
    
    public static void main(String[] args) 
    {
        java.awt.EventQueue.invokeLater(() -> {
            new MyNotepad().setVisible(true);
        });
    }
}